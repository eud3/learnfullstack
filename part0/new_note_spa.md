```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: add note to local array and redraw

    browser->>server: POST note

    Note right of browser: JSON {content: ..., date: ...}
```