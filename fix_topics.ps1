$content = Get-Content 'questions_sexual_reproduction.js' -Raw -Encoding UTF8
$content = $content -replace '"Cross-Concept: [^"]+"', '"Cross-Concept"'
[System.IO.File]::WriteAllText((Resolve-Path 'questions_sexual_reproduction.js'), $content, [System.Text.Encoding]::UTF8)
Write-Host "Done. Verifying..."
Select-String -Path 'questions_sexual_reproduction.js' -Pattern 'Cross-Concept:' | Measure-Object | Select-Object Count
Select-String -Path 'questions_sexual_reproduction.js' -Pattern '"Cross-Concept"' | Measure-Object | Select-Object Count
