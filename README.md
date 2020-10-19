# Project Overview

## Project Name

RXGuide

## Project Link 

https://rxguide.netlify.app/

## Project Description

RXGuide is an app made to help the user organize his medication.
The user will be able to add, edit or remove medication.

## Wireframes

#### Desktop: 
![desktop](https://i.imgur.com/nGl2Pbi.png)
#### Mobile: 
![mobile](https://i.imgur.com/1d2Rrpz.png)
#### Tablet: 
![tablet](https://i.imgur.com/5UDLN0K.png)

## Component Hierarchy

![alt text](https://i.imgur.com/4WMSkTa.png)

## API and Data Sample

Airtable API : https://airtable.com/
```
[
    {
        "id": "att6f75cc83f1b648",
        "size": 26317,
        "url": "https://www.filepicker.io/api/file/5YTJXioCQG0tYWPw6OPw",
        "type": "image/jpeg",
        "filename": "33823_3_xl.jpg",
        "thumbnails": {
            "small": {
                 "url": "https://www.filepicker.io/api/file/Dy5gioxaShSUvHX0LgIC",
                 "width": 54,
                 "height": 36
             },
            "large": {
                 "url": "https://www.filepicker.io/api/file/ueYi00yRiqhuUn420UZA",
                 "width": 197,
                 "height": 131
             }
         }
    }
]
```                         

#### MVP


- User should be able to add, remove, and edit RX.
- Use ReactDOM for other page/s (About, etc).


#### PostMVP

- Create a RX interactions page.
- User could choose a drug class before choosing drug name from list.
- CSS animations and other candy

## Project Schedule

| Day        | Deliverable                                        | Status     |
| ---------- | -------------------------------------------------- | ---------- |
| October 8  | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| October 9  | Project Approval                                   | Complete |
| October 11 | Core Application Structure (HTML, CSS, etc.)       | Complete |
| October 12 | Pseudocode / actual code                           | Complete |
| October 13 | Initial Clickable Model                            | Complete |
| October 14 | MVP                                                | Complete |
| October 16 | Presentations                                      | Complete |

## Timeframes

| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Creating base    |    H     |     10hrs      |      4hrs     |     4hrs    |
| Working with API |    H     |      8hrs      |      10hrs    |     10hrs   |
| MVP              |    H     |     10hrs      |      12       |     12hrs   |
| Post MVP         |    H     |     10hrs      |      10hrs    |     10hrs   |
| Total            |    H     |                |               |     36hrs    |

## SWOT Analysis

### Strengths:

- App will be comfortable to use.
- User will be able to add, edit, skip, or remove RX.

### Weaknesses:

- User will only be able to select a limited # of RX from a list.

### Opportunities:

- There aren't many good looking RX websites or apps, creating a nice looking RX app can be very competitive.
- most RX apps are cold-hearted/elegant looking, I went for a different approach which might attract people.

### Threats:

- There are other apps with the simillar idea competing for the same people.


### Code snippet I'm proud of

```
const sortedMeds = response.data.records.sort((recordA, recordB) => {
        const date1 = new Date(recordA.createdTime).getTime();
        const date2 = new Date(recordB.createdTime).getTime();
          
        if (date1 < date2) {
          // console.log('less than');
          return -1;
        }
        else if (date1 > date2) {
          // console.log('greater than');

          return 1;
        }

        else {
          // console.log('equal to ');

          return 0;
        }
      })
      setMeds(sortedMeds)
    }
    getApi()
  }, [fetchMeds])
```

## Changelogs:

- 10/16/2020: Fixed a bug where medication name would dissapear when edited.
- 10/18/2020: Added a page where user can create his own custom medication, added a home button shortcut in footer, changed image for removing medication to a trash bin.

- 10/19/2020: Added a search medication functionality in the about page.