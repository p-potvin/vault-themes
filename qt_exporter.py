import sys
import os

# Ensure theme_manager is importable
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.insert(0, current_dir)

from theme_manager import VaultThemeManager, VaultTheme

class QtThemeExporter:
    def __init__(self):
        self.manager = VaultThemeManager()

    def get_all_themes(self):
        return self.manager.get_themes()

    def generate_qss(self, theme: VaultTheme) -> str:
        """
        Generates a PySide6 QSS stylesheet for a given VaultTheme.
        Includes fix for QComboBox line-height/padding issues.
        """
        # Determine background and text color based on mode
        if theme.mode == "dark":
            base_color = theme.primary
            paper_color = "#FDF6E3" # Light text on dark bg
            slate_color = "#4A5459"
            muted_color = "#586E75"
        else:
            base_color = theme.primary
            paper_color = "#002B36" # Dark text on light bg
            slate_color = "#D3D3D3"
            muted_color = "#888888"

        gold_color = theme.accent

        qss = f"""
            QMainWindow {{ background-color: {base_color}; color: {paper_color}; }}
            QLabel {{ color: {paper_color}; font-family: 'Segoe UI Semilight', 'Inter'; font-size: 12px; }}
            
            /* Fix for QComboBox line height: increase min-height and padding */
            QLineEdit, QComboBox, QTextEdit, QSpinBox {{
                background-color: rgba(74, 84, 89, 0.1);
                border: 1px solid rgba(74, 84, 89, 0.3);
                border-radius: 8px;
                padding: 4px 8px; /* Less vertical padding so text isn't pushed out, or just increase height */
                min-height: 28px;
                color: {paper_color};
                font-family: 'Inter';
            }}
            
            QComboBox::drop-down {{
                border: none;
                width: 20px;
            }}
            
            QLineEdit:focus, QComboBox:focus {{ border-color: {gold_color}; }}
            
            QPushButton {{
                background-color: rgba(74, 84, 89, 0.2);
                border: none;
                border-radius: 8px;
                padding: 12px 20px;
                color: {paper_color};
                font-weight: 500;
            }}
            QPushButton:hover {{ background-color: rgba(74, 84, 89, 0.3); }}
            QPushButton#PrimaryBtn {{
                background-color: {gold_color};
                color: {base_color};
                font-weight: bold;
                font-size: 15px;
            }}
            QPushButton#PrimaryBtn:hover {{ background-color: #E5C06A; }}
            
            QCheckBox {{ color: {paper_color}; font-size: 12px; }}
            QCheckBox::indicator {{ width: 18px; height: 18px; border: 1px solid {slate_color}; border-radius: 5px; background-color: {base_color}; }}
            QCheckBox::indicator:checked {{ background-color: {gold_color}; border-color: {gold_color}; }}
            
            QFrame#ConfigPanel, QFrame#MonitorPanel {{
                background-color: rgba(74, 84, 89, 0.03);
                border: 1px solid rgba(74, 84, 89, 0.08);
                border-radius: 16px;
                padding: 10px;
            }}
            QProgressBar {{ background-color: rgba(74, 84, 89, 0.2); border: none; border-radius: 6px; }}
            QProgressBar::chunk {{ background-color: {gold_color}; border-radius: 6px; }}
            
            QLabel#LogoLabel {{
                background-color: {gold_color};
                color: {base_color};
                font-weight: bold;
                font-size: 20px;
                border-radius: 8px;
            }}

            QLabel#SectionTitleConfig, QLabel#SectionTitleMonitor {{
                color: {gold_color};
                font-size: 14px;
                font-weight: bold;
                letter-spacing: 2px;
                margin-bottom: 5px;
            }}

            QLabel#FooterLabel {{
                color: {muted_color};
                font-size: 10px;
                letter-spacing: 3px;
                text-transform: uppercase;
                margin-top: 10px;
            }}
        """
        return qss
