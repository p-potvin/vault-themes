"""
vaultwares_themes — importlib shim over the vaultwares-themes submodule.

The canonical source files (theme_manager.py, qt_exporter.py) live in the
parent directory of this package (the git submodule root). Because Python
cannot import from a directory whose name contains a hyphen, this shim package
(underscore) loads each module from the submodule root via importlib and
registers it under the ``vaultwares_themes.*`` namespace so that all
intra-package imports resolve correctly.

No code in the submodule root needs to be modified. Consumer code uses::

    import sys, os
    sys.path.insert(0, os.path.abspath("vaultwares-themes"))

    from vaultwares_themes import VaultTheme, VaultThemeManager, QtThemeExporter

If the submodule has not been initialised, run::

    git submodule update --init
"""

import importlib.util
import sys
from pathlib import Path

# The submodule root is the parent of this package directory:
#   <submodule_root>/vaultwares_themes/__init__.py  →  parent = <submodule_root>
_SUBMODULE_DIR = Path(__file__).parent.parent.resolve()

_PACKAGE = __name__  # "vaultwares_themes"

# Module load order must respect intra-package dependencies:
#   theme_manager (no internal deps)
#   → qt_exporter (depends on theme_manager)
_MODULES = [
    "theme_manager",
    "qt_exporter",
]


def _load_submodule(name: str):
    full_name = f"{_PACKAGE}.{name}"
    if full_name in sys.modules:
        return sys.modules[full_name]
    path = _SUBMODULE_DIR / f"{name}.py"
    if not path.is_file():
        raise ImportError(
            f"Cannot load '{full_name}': '{path}' not found. "
            "The vaultwares-themes submodule may not be initialised — "
            "run `git submodule update --init` and try again."
        )
    spec = importlib.util.spec_from_file_location(full_name, path)
    if spec is None:
        raise ImportError(
            f"Cannot create module spec for '{full_name}' from '{path}'. "
            "Verify that the file is a valid Python source file."
        )
    module = importlib.util.module_from_spec(spec)
    # Register before exec so cyclic/relative imports resolve to this entry.
    sys.modules[full_name] = module
    module.__package__ = _PACKAGE
    spec.loader.exec_module(module)
    return module


for _name in _MODULES:
    _load_submodule(_name)

from .theme_manager import VaultTheme, VaultThemeManager
from .qt_exporter import QtThemeExporter

__all__ = [
    "VaultTheme",
    "VaultThemeManager",
    "QtThemeExporter",
]
