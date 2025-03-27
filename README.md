# ⚡️ react-smart-alert

A **universal, cross-platform alert system** for **React** and **React Native**.  
Supports:

✅ Redux Toolkit  
✅ Traditional Redux  
✅ Context API  
✅ No state setup (auto fallback)  
✅ Web & React Native  
✅ Custom CSS support  

---

## 🚀 Installation

```
npm install react-smart-alert

```

If not already installed, also add:
```
npm install react react-redux @reduxjs/toolkit

```
📦 Features
Works with React AND React Native

Supports Redux Toolkit ✅

Supports Traditional Redux ✅

Supports Context API ✅

Works even without Redux/Context (auto fallback) ✅

Customizable styling ✅

1. Wrap Your App

```javascript
import { AlertProvider, Alert } from 'react-smart-alert';

<AlertProvider>
  <Alert />
  <YourApp />
</AlertProvider>
```

2. Use Hook Anywhere

```javascript
import { useAlert } from 'react-smart-alert';

const Component = () => {
  const alert = useAlert();

  return <button onClick={() => alert('Hello World!', 'success')}>Show Alert</button>;
};
```
🔁 Usage with Redux Toolkit
1. Configure Store
js
Copy
Edit
import { configureStore } from '@reduxjs/toolkit';
import { alertReducer } from 'react-smart-alert';

export const store = configureStore({
  reducer: {
    alert: alertReducer,
  },
});
2. Wrap App in Redux Provider
jsx
Copy
Edit
import { Provider } from 'react-redux';
import { Alert } from 'react-smart-alert';

<Provider store={store}>
  <Alert />
  <YourApp />
</Provider>
🔁 Usage with Traditional Redux
1. Setup Reducer
js
Copy
Edit
import { createStore, combineReducers } from 'redux';
import { createAlertReducer } from 'react-smart-alert';

const rootReducer = combineReducers({
  alert: createAlertReducer(),
});

const store = createStore(rootReducer);
2. Same: Wrap App with <Provider> and use <Alert />
📱 React Native Support
React Native support is built-in. Use exactly like web version:

jsx
Copy
Edit
import { AlertProvider, Alert, useAlert } from 'react-smart-alert';

<AlertProvider>
  <Alert />
  <YourScreen />
</AlertProvider>
js
Copy
Edit
const MyScreen = () => {
  const alert = useAlert();
  return <Button title="Show" onPress={() => alert('React Native Alert', 'info')} />;
};
🎨 Custom Styling (Web Only)
jsx
Copy
Edit
<Alert className="custom-alert" />
Or override default CSS:

css
Copy
Edit
.alert-success {
  background-color: #28a745 !important;
}
📋 Alert Types
Type	Description
info	General info or notice
success	Success messages
warning	Risky actions, confirmations
error	Failures, validation errors
⏱ Custom Duration
js
Copy
Edit
alert("This will stay for 5 seconds", "info", 5000);
⚙️ Fallback (Zero Config Usage)
No Redux or Context? No problem:

jsx
Copy
Edit
import { InternalAlertProvider, Alert, useAlert } from 'react-smart-alert';

<InternalAlertProvider>
  <Alert />
  <App />
</InternalAlertProvider>
🛠 API Reference
useAlert(message, type?, duration?)
Param	Type	Default	Description
message	string	required	The alert message
type	string	info	One of: info, success, warning, error
duration	number	3000	Duration in ms before hiding
🧑‍💻 Author
Made with ❤️ by Rohit

🪪 License
MIT License

yaml
Copy
Edit

---

✅ Just paste this into your `README.md` file  
✅ Push to GitHub  
✅ Ready for npm and devs to use!

Let me know if you want a badge version (`npm`, `GitHub stars`, etc.) for the top section too!