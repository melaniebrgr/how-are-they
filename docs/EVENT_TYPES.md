### alert qualified (13)

```json
{
  "id": "10ba9167-d29a-44d8-a080-dbdf9fc11e3c",
  "alert_id": "405c34e6-3a4c-4f36-84d6-b7b6d6bbbcf3",
  "timestamp": "2019-04-25T16:20:49.518Z",
  "event_type": "alert_qualified",
  "caregiver_id": "1d566baa-19bb-4d9f-b088-0b37f35cf1ff",
  "alert_severity": "LOW",
  "care_recipient_id": "e3e2bff8-d318-4760-beea-841a75f00227"
}
```

### alert raised (831)

```json
{
  "id": "030c11ee-1b53-45c8-a73a-f0e45fbddfd3",
  "alert_id": "030c11ee-1b53-45c8-a73a-f0e45fbddfd3",
  "timestamp": "2019-04-26T08:01:24.611Z",
  "event_type": "alert_raised",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d",
  "observation_event_id": "324026a9-d6b9-4894-a7f5-af4f93392836"
}
```

### catheter observation (72)

```json
{
  "id": "02cbc33c-701a-4790-ad7e-58af6b2ed9d4",
  "note": "",
  "visit_id": "bfe0fe96-2a95-4013-8c0a-431c6e74f73d",
  "timestamp": "2019-05-08T12:12:53.169Z",
  "volume_ml": 700,
  "event_type": "catheter_observation",
  "caregiver_id": "b5583964-a87f-4f29-91eb-e1996bb54ea4",
  "care_recipient_id": "ad3512a6-91b1-4d7d-a005-6f8764dd0111"
}
```

### check in (310)

```json
{
  "id": "04b6f9a6-f945-4709-be41-1760b730dd5a",
  "visit_id": "5cbe4770-8b66-f8a8-4ae1-80868e9de145",
  "timestamp": "2019-04-23T14:52:15.686Z",
  "event_type": "check_in",
  "caregiver_id": "220d9432-b5ed-4c81-8709-434899d2cd1b",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
}
```

### check out (307)

```json
{
  "id": "0192894f-5cb4-498b-bd7c-b53cab8be201",
  "visit_id": "5cce1970-8b66-f8a8-4e3a-a21099829cd7",
  "timestamp": "2019-05-05T18:47:06.986Z",
  "event_type": "check_out",
  "caregiver_id": "f8651589-8e43-4787-a061-9a504579c999",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
}
```

### concern raised (8)

```json
{
  "id": "7d8627c9-696e-485e-bf9f-ea579031ac24",
  "note": "[redacted] had a fall. She gave me permission to call the doctor and I did that",
  "severity": "HIGH",
  "visit_id": "2b47419f-656d-45d6-a510-09a68cb83942",
  "timestamp": "2019-04-25T17:43:04+01:00",
  "event_type": "concern_raised",
  "navigation": {
    "state": {
      "key": "id-1556209238290-96",
      "index": 0,
      "params": {
        "recipientId": "e3e2bff8-d318-4760-beea-841a75f00227"
      },
      "routes": [
        {
          "key": "id-1556209238290-95",
          "params": {
            "recipientId": "e3e2bff8-d318-4760-beea-841a75f00227"
          },
          "routeName": "ItemSelection"
        }
      ],
      "routeName": "Concerns",
      "isTransitioning": false
    },
    "router": {
      "childRouters": {
        "NoteTaking": null,
        "ItemSelection": null
      }
    },
    "actions": {},
    "_childrenNavigation": {
      "id-1556209238290-95": {
        "state": {
          "key": "id-1556209238290-95",
          "params": {
            "recipientId": "e3e2bff8-d318-4760-beea-841a75f00227"
          },
          "routeName": "ItemSelection"
        },
        "actions": {}
      }
    }
  },
  "screenProps": {
    "role": "ROLE_EAGLE"
  },
  "caregiver_id": "1d566baa-19bb-4d9f-b088-0b37f35cf1ff",
  "observations": [],
  "care_recipient_id": "e3e2bff8-d318-4760-beea-841a75f00227"
}
```

### fluid intake observation (516)

```json
{
  "id": "00114a9f-00dc-4f39-a6ac-af1b7e0543e7",
  "fluid": "caffeinated",
  "observed": false,
  "visit_id": "5cc23bf0-8b66-f8a8-4339-688e1d43e11a",
  "timestamp": "2019-04-26T07:08:21.758Z",
  "event_type": "fluid_intake_observation",
  "caregiver_id": "220d9432-b5ed-4c81-8709-434899d2cd1b",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d",
  "consumed_volume_ml": 230
}
```

### food intake observation (162)

```json
{
  "id": "0cbea3f2-d9a3-40ae-a18d-3692bf1bf5cf",
  "meal": "meal",
  "note": "Hunters chicken with potatoes. Cheeses cake and 2x cookies for pud ",
  "visit_id": "5ccf6af0-8b66-f8a8-4c03-d1151298e152",
  "timestamp": "2019-05-06T15:42:06+01:00",
  "event_type": "food_intake_observation",
  "caregiver_id": "f8651589-8e43-4787-a061-9a504579c999",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
}
```

### general observation (260)

```json
{
  "id": "04b7aa31-7125-4a6a-8851-cfb5867f4a87",
  "note": "[redacted] OK on arrival. Already in bed. Changed pad and gave freshen up. Made comfortable. Washed up and wiped up. Got washing in from outside and folded. Made a cuppa. All meds given. All ok",
  "media": [],
  "visit_id": "5cbe4770-8b66-f8a8-45fa-db0b393fe188",
  "timestamp": "2019-04-23T18:24:16.536Z",
  "event_type": "general_observation",
  "caregiver_id": "220d9432-b5ed-4c81-8709-434899d2cd1b",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
}
```

### incontinence pad observation (149)

```json
{
  "id": "03e6209a-be53-4fd8-a0ec-08437b19aa07",
  "visit_id": "5cc63070-8b66-f8a8-471d-d227129b9c78",
  "timestamp": "2019-04-29T15:12:18.714Z",
  "event_type": "incontinence_pad_observation",
  "navigation": {
    "state": {
      "key": "id-1556546041168-108",
      "index": 0,
      "routes": [
        {
          "key": "id-1556546041168-107",
          "routeName": "ItemSelection"
        }
      ],
      "routeName": "incontinence_pad_observation",
      "isTransitioning": false
    },
    "router": {
      "childRouters": {
        "NoteTaking": null,
        "ItemSelection": null
      }
    },
    "actions": {},
    "_childrenNavigation": {
      "id-1556546041168-107": {
        "state": {
          "key": "id-1556546041168-107",
          "routeName": "ItemSelection"
        },
        "actions": {}
      }
    }
  },
  "screenProps": {
    "careRecipientId": "df50cac5-293c-490d-a06c-ee26796f850d"
  },
  "caregiver_id": "ca216495-6806-4ecb-974d-e7ece2e9e5b5",
  "observations": [],
  "pad_condition": "soiled",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
}
```

### medication schedule created (10)

```json
{
  "id": "051c15a4-b1c9-4de4-bde0-d7df501ae116",
  "note": "",
  "type": "BLISTER",
  "rrule": "DTSTART:20190425T000000ZRRULE:FREQ=DAILY;INTERVAL=1;BYHOUR=8",
  "user_id": "1d566baa-19bb-4d9f-b088-0b37f35cf1ff",
  "dose_size": "1",
  "timestamp": "2019-04-25T16:50:07.730Z",
  "event_type": "medication_schedule_created",
  "care_recipient_id": "e3e2bff8-d318-4760-beea-841a75f00227",
  "medical_product_id": "8722011000001100",
  "medication_schedule_id": "279987cb-372f-4990-81d0-7b6318d2df56"
}
```

### medication schedule updated (1)

```json
{
  "id": "2b354d8a-04a6-4884-a3cf-1e32ff3339e2",
  "note": "",
  "type": "SCHEDULED",
  "rrule": "DTSTART:20190405T180000ZRRULE:FREQ=DAILY;INTERVAL=1;BYHOUR=8,12,16,20;WKST=MO;UNTIL=20190429T140000Z;BYMINUTE=0;BYSECOND=0",
  "user_id": "d23ea4a7-cdbd-4473-9f0b-a5daf77aaf61",
  "dose_size": "To be spread on infected area ",
  "timestamp": "2019-04-29T12:54:34.651Z",
  "event_type": "medication_schedule_updated",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d",
  "medical_product_id": "332049000",
  "medication_schedule_id": "2b94c1d1-2a57-498c-ac88-104801e44d8d"
}
```

### mental health observation (16)

```json
{
  "id": "360e2d91-410c-4889-8e5e-6512f454b8a6",
  "note": "Nothing unusual to report ",
  "visit_id": "5cbf98f0-8b66-f8a8-46cc-259953fc9c2a",
  "timestamp": "2019-04-24T07:17:01.227Z",
  "event_type": "mental_health_observation",
  "caregiver_id": "ca216495-6806-4ecb-974d-e7ece2e9e5b5",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
}
```

### mood observation (152)

```json
{
  "id": "01f547a3-7eb1-48f0-86d2-ddc996abd617",
  "mood": "okay",
  "visit_id": "2ddc77cd-521f-11e9-b63f-06a80bfbb33e",
  "timestamp": "2019-05-10T12:27:21+01:00",
  "event_type": "mood_observation",
  "caregiver_id": "5ca42f72-9e70-4b8d-b8be-da5ed779b586",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
}
```

### no medication observation received (946)

```json
{
  "id": "03789800-a5af-4704-bbc0-ddd545a10b81",
  "timestamp": "2019-04-24T22:00:17.156Z",
  "event_type": "no_medication_observation_received",
  "medication_type": "SCHEDULED",
  "task_instance_id": "bXwyYjk0YzFkMS0yYTU3LTQ5OGMtYWM4OC0xMDQ4MDFlNDRkOGR8MjAxOS0wNC0yNFQxMTowMDowMC4wMDBa",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d",
  "expected_dose_timestamp": "2019-04-24T11:00:00.000Z"
}
```

### physical health observation (28)

```json
{
  "id": "00f22927-0f3b-4b7e-aa7a-4659699ed124",
  "note": "[redacted] is well. ",
  "visit_id": "5cd4b0f0-8b66-f8a8-4900-34da6bf2e11e",
  "timestamp": "2019-05-10T15:24:05.419Z",
  "event_type": "physical_health_observation",
  "caregiver_id": "ca216495-6806-4ecb-974d-e7ece2e9e5b5",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
}
```

### regular medication maybe taken (25)

```json
{
  "id": "012e5011-b387-4a2f-8f98-a91deb75c1ca",
  "note": "Ok",
  "visit_id": "ef22785b-4b73-4099-bb03-d7d5e5b7fb11",
  "timestamp": "2019-04-29T14:28:43+01:00",
  "event_type": "regular_medication_maybe_taken",
  "caregiver_id": "d8d66637-c3d6-4c58-a254-3b274a031fec",
  "task_instance_id": "bXxjZDU5NGM5My0zZGZlLTQwYzAtOGFhYy00NzA3YzMxMzVjZjZ8MjAxOS0wNC0yOVQwNzowMDowMC4wMDBa",
  "care_recipient_id": "e3e2bff8-d318-4760-beea-841a75f00227",
  "medication_failure_reason": "REFUSED"
}
```

### regular medication not taken (41)

```json
{
  "id": "05951128-7040-42ae-9e20-fa05e5f9794e",
  "note": "Not due to 20:00 family are going to give [redacted] paracetamol ",
  "visit_id": "5cce1970-8b66-f8a8-4e3a-a21099829cd7",
  "timestamp": "2019-05-05T19:32:13+01:00",
  "event_type": "regular_medication_not_taken",
  "caregiver_id": "f8651589-8e43-4787-a061-9a504579c999",
  "medication_type": "SCHEDULED",
  "task_instance_id": "bXxlODRjZmI4My1hZjhlLTRlMzEtOGYxZS1kZWNiMjcxNDg3OTZ8MjAxOS0wNS0wNVQxOTowMDowMC4wMDBa",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d",
  "medication_failure_reason": "OTHER"
}
```

### regular medication partially taken (1)

```json
{
  "id": "d9b5b2dc-c42d-4fab-ae0a-1ebaa362d3a3",
  "note": "Hhh",
  "visit_id": "87148b29-2939-484c-9ae1-b8656a1298bf",
  "timestamp": "2019-05-07T17:04:52+01:00",
  "event_type": "regular_medication_partially_taken",
  "caregiver_id": "183ed034-359b-4dab-9f7f-681f26c0c144",
  "medication_type": "PRN",
  "task_instance_id": "bXxkOTU0YmI2OS02NmY3LTRkODQtOGNiMS04ZjdmZDgyMzBjYzJ8MjAxOS0wNS0wNlQyMzowMDowMC4wMDBa",
  "care_recipient_id": "e3e2bff8-d318-4760-beea-841a75f00227",
  "medication_failure_reason": "MEDICATION_ERROR"
}
```

### regular medication taken (555)

```json
{
  "id": "022da94b-af79-4b22-bac6-5956c41af3ea",
  "visit_id": "5cc63070-8b66-f8a8-435e-4b7ad12dc9a0",
  "timestamp": "2019-04-29T19:31:06+01:00",
  "event_type": "regular_medication_taken",
  "caregiver_id": "f7a00df5-bbc4-4ad7-9918-c07e16e709f6",
  "medication_type": "SCHEDULED",
  "task_instance_id": "bXwyNWVhNDVjNS1jZDA1LTQ0YmItOGE1OS0zMWFjMTA1ZjE5ZDh8MjAxOS0wNC0yOVQxODowMDowMC4wMDBa",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
}
```

### task completed (1046)

```json
{
  "id": "006139b8-a387-4529-9280-2d798c500aeb",
  "visit_id": "5cd753f0-8b66-f8a8-4591-3f78ca3f9c45",
  "timestamp": "2019-05-12T07:23:12.789Z",
  "event_type": "task_completed",
  "caregiver_id": "5c9090ab-7d5e-4a72-8bf7-197190ad4c98",
  "task_instance_id": "dHxmMjU2YmFlYS1jODEyLTRjZWMtOTUxNC0wYzc5YjNjZmQwMzN8MjAxOS0wNS0xMlQwNzowMDowMC4wMDBafE1PUk5JTkc=",
  "task_schedule_id": "f256baea-c812-4cec-9514-0c79b3cfd033",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d",
  "task_definition_id": "1bf3b81d-40b0-4539-ba96-9ea12ad6110b",
  "task_schedule_note": "Please assist me to brush my teeth",
  "task_definition_description": "Assist with oral hygiene"
}
```

### task completion reverted (47)

```json
{
  "id": "0ffe3260-ac7f-4046-8167-4eedaf462b70",
  "visit_id": "e8465d34-706e-40d8-a360-253d61bfe2ad",
  "timestamp": "2019-04-23T11:07:03.873Z",
  "event_type": "task_completion_reverted",
  "caregiver_id": "868ffde9-b069-4af5-8835-c4ac4e72e4b5",
  "task_instance_id": "dHw2YTlkNzI3Yy0yZjE1LTQwNTQtYTkxOC1mNmFiMDZmZWRlMjV8MjAxOS0wNC0yM1QxOTowMDowMC4wMDBafEVWRU5JTkc=",
  "task_schedule_id": "6a9d727c-2f15-4054-a918-f6ab06fede25",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d",
  "task_definition_id": "3cc47a1e-c2cd-405d-a013-01926bad9fe1",
  "task_schedule_note": "Please assist me into bed using my gantry hoist.",
  "task_definition_description": "Assist into bed"
}
```

### task schedule created (5)

```json
{
  "id": "18440dbf-86cf-405e-b333-c250b25e5c09",
  "note": "",
  "rrule": "DTSTART:20190429T000000ZRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=TH,SA;BYHOUR=16;BYMINUTE=0;BYSECOND=0",
  "timestamp": "2019-04-29 13:45:35",
  "event_type": "task_schedule_created",
  "caregiver_id": "d8d66637-c3d6-4c58-a254-3b274a031fec",
  "task_schedule_id": "734c5d2a-6d12-41df-8378-5186b57fb571",
  "care_recipient_id": "e3e2bff8-d318-4760-beea-841a75f00227",
  "task_definition_id": "1f6ebda8-5759-43f9-aee7-6f4339a96c20"
}
```

### toilet visit recorded (1)

```json
{
  "id": "d4095eb4-e5d5-4fd6-9bcd-7078773d97e8",
  "note": "",
  "observed": true,
  "visit_id": "8db86d75-435b-42ee-bb2f-fb7fcff06dd4",
  "timestamp": "2019-05-11T17:07:15.489Z",
  "event_type": "toilet_visit_recorded",
  "visit_type": "bowel",
  "visit_count": 3,
  "caregiver_id": "421bdf67-bca5-4450-9559-d754ef86cf95",
  "care_recipient_id": "ad3512a6-91b1-4d7d-a005-6f8764dd0111"
}
```

### visit cancelled (3)

```json
{
  "id": "dcba0cd0-ac81-409f-a165-8c202a3ac127",
  "visit_id": "5cc781f0-8b66-f8a8-4b30-7a5630adca0c",
  "timestamp": "2019-04-30T13:58:40.586Z",
  "event_type": "visit_cancelled",
  "caregiver_id": "17541b2e-710d-430f-a0a3-2fb4a3285946",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
}
```

### visit completed (305)

```json
{
  "id": "01160495-2942-4d8f-ad8c-61f5d0dbd15f",
  "visit_id": "5ccb7670-8b66-f8a8-4db7-58c55cf8c9a2",
  "timestamp": "2019-05-03T19:03:21.305Z",
  "event_type": "visit_completed",
  "caregiver_id": "f7a00df5-bbc4-4ad7-9918-c07e16e709f6",
  "care_recipient_id": "df50cac5-293c-490d-a06c-ee26796f850d"
}
```