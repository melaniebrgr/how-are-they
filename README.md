# How are they?

As the family member of an older adult living at home with the assistance of a care giver, I would want to keep up to date with how they are doing, especially if I live far away from them and it's difficult to visit regularly. I would want to know, did they take their medication as required? How are they doing? When was the last time they were checked in on? This app aims to present this information, in part, in a convenient and clear way.


## Data exploration

The types of events that a caregiver might log are are listed in the EVENT_TYPES [readme](./docs/EVENTS_TYPES.md). Every observation has a least a `visit_id`, `caregiver_id`, `care_recipient_id`, `timestamp`, `id`, and `event_type`, and a json payload. The JSON payload varies by type. For this app the most freqent event types are those related to medication, which may be a reflection of importance. The app focussed on medication accordingly.

## About the approach

- The `createService` utility can be configured with a “loader”, “validator”, and “transform”. This enabled me to use a mock loader, which returned mock data, and unblocked me to work on the UI without the backend being ready or before I had a full idea of what data I wanted to use on the frontend yet. Once those were established, I was able to easily swap the mock for the "real" loader, see `domains/medication/medication.services`, line 27.
- Using ramda required a typescript upgrade to a more recent version that included changes for checking of HOCs without running into [out-of-memory issues](https://github.com/microsoft/TypeScript/issues/30473). Accordingly, I got started by first just getting ramda working within a .js file, then migrated to .ts following the upgrade.
- `createAsyncSequence` is a modification of a pattern I used on a past redux-saga project. The benefit of this utility is that it ensures all asynchronous requests dispatch the same sequence of events (pending, success, rejected), enabling them to be tracked in state and displayed in the UI as needed. For example, a loading spinner could be displayed while a request is pending. In a future project I'd like to try `React Query` and see how it compares to this redux-saga version.

## Improvements

Here's what I would like to have done additionally:

- Created a users endpoint returning a list of users for display in a `<select>` input. On selection, data for that user is fetched.
- Fetched `no_medication_observation_received` events as well and displayed in the app.
- Added stronger types for `createAsyncSequence`.
- Improved unit test coverage, ideally any component or utility that contains logic is covered by a unit test.
- Added e2e test coverage, ideally "core" user flows are covered by an e2e test.
