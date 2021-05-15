# How are they?

As the family member of an older adult living at home with the assistance of a care giver, I would want to keep up to date with how they are doing, especially if I live far away from them and it's difficult to visit regularly. I would want to know, did they take their medication as required? How are they doing? When was the last time they were checked in on? This app aims to present information in a convenient and understandable way so that if something is going with their relative, they will know about it.


## Data exploration

The types of events (observations) that a caregiver might log are are listed in the EVENT_TYPES [readme](./docs/EVENTS_TYPES.md). Every observation has a least a `visit_id`, `caregiver_id`, `care_recipient_id`, `timestamp`, `id`, and `event_type`, and a json payload. The JSON payload varies by type. For this app the most freqent event types are those related to medication, and notes, which may be, in part, a reflection of importance. The app will focus on these accordingly.

## Changes made

- Using ramda required a typescript upgrade to a more recent version that included changes for checking of HOCs without running into [out-of-memory issues](https://github.com/microsoft/TypeScript/issues/30473). Accordinly, I got ramda working first in a .js file, and then migrated the files to .ts after completing the upgrade.


## Improvements

- Add stronger types for `createAsyncSequence`
