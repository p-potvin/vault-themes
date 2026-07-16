# VaultWares Revisited — Avalonia Port

Token dictionary for Avalonia (.NET) apps, mirroring the Tailwind/CSS port's
rules in `../../IMPLEMENTATION.md`. First consumer: `wander/Wander.Dashboard`.

## Usage

Merge `VaultTokens.axaml` into your `App.axaml` resources, then declare your
own `VaultInk` / `VaultInkSecondary` locally — the warm-mode foreground is not
a revisited.css token (see `../../TOKENS.md`), so every consumer declares it
itself, same as the web `vault-explorer` example:

```xml
<Application.Resources>
    <ResourceDictionary>
        <ResourceDictionary.MergedDictionaries>
            <ResourceInclude Source="/path/to/vaultwares-themes/vaultwares-revisited/ports/avalonia/VaultTokens.axaml"/>
        </ResourceDictionary.MergedDictionaries>

        <!-- consumer-declared, not part of the shared token set -->
        <SolidColorBrush x:Key="VaultInk">#161320</SolidColorBrush>
        <SolidColorBrush x:Key="VaultInkSecondary">#99161320</SolidColorBrush>
    </ResourceDictionary>
</Application.Resources>
```

Consume with `{StaticResource VaultConsoleGold}` etc. Do not hardcode hex
values in consumer XAML — same rule as the CSS/Tailwind port.

## Modes

Console and warm coexist in one screen (not light/dark variants): console is
the operational core, warm is the structural frame around it. See
`../../PHILOSOPHY.md` ("The Terminal and The Document").

## Status

Colors and fonts only. The web port also has `.vw-console-shell` / `.vw-card`
style classes (`../../IMPLEMENTATION.md`) — an Avalonia `Styles` equivalent
is a natural next step once a second Avalonia consumer needs it; not built
yet to avoid designing it against a single data point.
