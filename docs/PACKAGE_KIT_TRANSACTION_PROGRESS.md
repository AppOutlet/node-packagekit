## Which methods are available?

### org.freedesktop.PackageKit.Transaction

| **Methods**        |     |
|--------------------|-----|
| SetHints           | ❌   |
| AcceptEula         | ❌   |        
| Cancel             | ❌   |      
| DownloadPackages   | ❌   |
| GetCategories      | ✅   |  
| DependsOn          | ❌   |
| GetDetails         | ✅   |
| GetDetailsLocal    | ✅   |
| GetFilesLocal      | ✅   |
| GetFiles           | ✅   |
| GetOldTransactions | ❌   |
| GetPackages        | ✅   |
| GetRepoList        | ✅   |
| RequiredBy         | ❌   |
| GetUpdateDetail    | ❌   |
| GetUpdates         | ❌   |
| GetDistroUpgrades  | ❌   |
| InstallFiles       | ❌   |
| InstallPackages    | ❌   |
| InstallSignature   | ❌   |
| RefreshCache       | ❌   |
| RemovePackages     | ✅   |
| RepoEnable         | ❌   |
| RepoSetData        | ❌   |
| RepoRemove         | ❌   |
| Resolve            | ❌   |
| SearchDetails      | ✅   |
| SearchFiles        | ❌   |
| SearchGroups       | ❌   |
| SearchNames        | ✅   |
| UpdatePackages     | ✅   |
| WhatProvides       | ❌   |
| UpgradeSystem      | ❌   |
| RepairSystem       | ❌   |

| Signals               |     |
|-----------------------|-----|
| Category              | ✅   |     
| Details               | ✅   |
| ErrorCode             | ✅   |
| Files                 | ❌   |
| Finished              | ✅   |
| Package               | ✅   |
| RepoDetail            | ❌   |
| RepoSignatureRequired | ❌   |
| EulaRequired          | ❌   |
| MediaChangeRequired   | ❌   |
| RequireRestart        | ❌   |
| Transaction           | ❌   |
| UpdateDetail          | ❌   |
| DistroUpgrade         | ❌   |
| ItemProgress          | ✅   |
| Destroy               | ✅   |

| **Properties**        |     |
|-----------------------|-----|
| Role                  | ❌   |
| Status                | ✅   |
| LastPackage           | ❌   |
| Uid                   | ✅   |
| Percentage            | ✅   |
| AllowCancel           | ❌   |
| CallerActive          | ❌   |
| ElapsedTime           | ✅   |
| RemainingTime         | ✅   |
| Speed                 | ✅   |
| DownloadSizeRemaining | ✅   |
| TransactionFlags      | ❌   | 
