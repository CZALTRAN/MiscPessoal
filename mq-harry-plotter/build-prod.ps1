Set-Location -Verbose D:\Development\czaltran.github.io\harry-plotter
Remove-Item -Recurse -Verbose *

Set-Location -Verbose D:\Development\MiscPessoal\mq-harry-plotter
ng build --prod --baseHref=/harry-plotter/

Copy-Item -Recurse -Force -Verbose D:\Development\MiscPessoal\mq-harry-plotter\dist\mq-harry-plotter\*   D:\Development\czaltran.github.io\harry-plotter


