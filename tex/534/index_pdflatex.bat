@echo OFF
FOR %%f IN ("*.tex") DO (
echo C:\Program Files\MiKteX\miktex\bin\x64\pdflatex.exe %%~f
pdflatex.exe %%~f)


del *.aux
del *.log
pause