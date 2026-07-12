### The Core Problem

The page from [Getting Started with OpenTelemetry (LFS148)](https://trainingportal.linuxfoundation.org/learn/course/getting-started-with-opentelemetry-lfs148/why-do-we-need-opentelemetry/problems-with-the-status-quo?page=2) highlights a fundamental flaw in traditional observability: telemetry data—such as metrics, logs, and traces—is typically isolated in disconnected "silos." This separation makes troubleshooting highly inefficient.

### The Flawed Troubleshooting Workflow

When an issue occurs, engineers typically face a disjointed investigation process:

1. **Detection (Metrics):** An incident usually triggers an alert or anomaly on a metrics dashboard, simply indicating that _something_ went wrong at a specific time.
    
2. **Investigation (Logs):** To find the actual root cause, the engineer must switch to an entirely separate logging system, relying on manual queries and extensive filtering to hunt for errors related to the metric spike.
    
3. **The Missing Link (Context):** Traditional logging systems fail to capture the broader context of an operation. Because they lack standardized metadata like **Trace IDs** or **Span IDs**, it is nearly impossible to correlate isolated log events across different microservices and reconstruct the complete chain of events.
    

### The Human Impact

System failures in the real world are rarely just a "metrics problem" or a "logging problem." Because legacy tools force operators to manually jump between different platforms and manually piece together fragments of data to build a mental model of the system's behavior, it creates a massive and unnecessary cognitive load. The ultimate goal of OpenTelemetry is to solve this by natively correlating these signals from the start.