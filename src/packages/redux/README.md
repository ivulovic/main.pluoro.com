# Techical documentation

## Installation and setup

<br/>

### Required Packages
<br/>

| Package Name     | Required |
| -----------      | -------- |
| react-redux      | Yes      |
| redux-injectors  | Yes      |
| @reduxjs/toolkit | Yes      |
| reselect         | No       |


<br/>

### Provide store to the app
<br/>

```
import { configureAppStore, Provider } from "@reactoso-redux";
const store = configureAppStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
)
```