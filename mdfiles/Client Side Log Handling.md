# Client Side Log Handling

The system described below can be used to use the logs (EM.trace) written on the front page (qjson) and the logs printed on the engine (such as sending to service, keeping in the store etc.).

In order to access these printed logs, a custom event called **logHandler** must be written on the Messaging component in the **pipeline.json** file. A parameter is sent to this event after each log is printed, depending on the interface below.

```tsx
interface IMessage {
    message: string // Log message
    type: string // Debug | MobilDebug | Trace | Warning | Error
    time: string // When the browser writes the message
    caller?: string // Caller function of the message 
}
```

