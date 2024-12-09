# Testing Strategies

## Unit Tests
- **Focus**: Testing individual units (e.g. functions, methods) in isolation.
- **Dependencies**: External services are mocked out to isolate the unit.
- **Purpose**: Verify correctness of a unit’s behavior.
- **Execution**: Fast and provides quick feedback.
- **Use Case**: Catch bugs early and ensure components work before integration.

---

## Integration Tests
- **Focus**: Testing interaction between multiple components or modules.
- **Dependencies**: Uses actual external services or dependencies.
- **Purpose**: Ensure different components work together without issues like communication errors or data inconsistencies.
- **Execution**: Slower than unit tests due to setup of external services.
- **Use Case**: Validate compatibility and integration of components.

---

## End-to-End (E2E) Tests
- **Focus**: Simulate real-world user scenarios across the entire application.
- **Dependencies**: Interact with the full application stack (UI, backend and external systems).
- **Purpose**: Verify application behavior from a user’s perspective.
- **Execution**: Slowest and most resource intensive.
- **Use Case**: Ensure overall functionality and user experience.

---

## Balanced Strategy
- Combine **unit tests** for component correctness, **integration tests** for component interaction and **E2E tests** for overall functionality to achieve comprehensive testing.
