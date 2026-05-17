$files = Get-ChildItem -Path "src" -Filter "*.jsx" -Recurse
foreach ($file in $files) {
    try {
        $content = Get-Content -Path $file.FullName -Raw
        # Remove any and all lines that start with import React from 'react' (or similar)
        # to ensure we don't have duplicates.
        $content = $content -replace "(?m)^import\s+React\s+from\s+['""]react['""];?\s*\r?\n", ""
        
        # Check if it has JSX
        if ($content -match "<[^>]+>") {
            # Check if it already has ANY React import (React, { useState }, * as React, etc.)
            if ($content -notmatch "import\s+.*?React.*?\s+from") {
                $newContent = "import React from 'react';`n" + $content
                Set-Content -Path $file.FullName -Value $newContent
                Write-Host "Added React to $($file.FullName)"
            } else {
                # If it already has an import containing "React", just save the cleaned (no duplicate) content
                Set-Content -Path $file.FullName -Value $content
                Write-Host "Verified/Cleaned $($file.FullName)"
            }
        }
    } catch {
        Write-Warning "Failed to process $($file.FullName): $($_.Exception.Message)"
    }
}
