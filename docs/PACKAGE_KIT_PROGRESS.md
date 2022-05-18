## Which methods are available?

### org.freedesktop.PackageKit

| **Methods**         |     |
|---------------------|-----|
| CanAuthorize        | ❌   |
| CreateTransaction   | ✅   |
| GetTimeSinceAction  | ❌   |
| GetTransactionList  | ❌   |
| StateHasChanged     | ❌   |
| SuggestDaemonQuit   | ❌   |
| GetPackageHistory   | ❌   |
| GetDaemonState      | ❌   |
| SetProxy            | ❌   |
| ClearResults        | ❌   |
| Trigger             | ❌   |
| TriggerUpgrade      | ❌   |
| Cancel              | ❌   |
| GetPrepared         | ❌   |

| **Signals**            |     |
|------------------------|-----|
| TransactionListChanged | ❌   |
| RestartSchedule        | ❌   |
| RepoListChanged        | ❌   |
| UpdatesChanged         | ❌   |

| **Properties**     |     |
|--------------------|-----|
| VersionMajor       | ✅   |
| VersionMinor       | ✅   |
| VersionMicro       | ✅   |
| BackendName        | ❌   |
| BackendDescription | ❌   |
| BackendAuthor      | ❌   |
| Roles              | ❌   |
| Groups             | ❌   |
| Filters            | ❌   |
| MimeTypes          | ❌   |
| Locked             | ❌   |
| NetworkState       | ❌   |
| DistroId           | ✅   |
| UpdatePrepared     | ❌   |
| UpdateTriggered    | ❌   |
| UpgradePrepared    | ❌   |
| UpgradeTriggered   | ❌   |
| PreparedUpgrade    | ❌   |
| TriggerAction      | ❌   |

