# Redberry Knight Cup

Redberry Knight Cup is a web-based application that allows users to register. The system is built using HTML, CSS, and JavaScript, providing a user-friendly interface and seamless user experience.
![Alt Text](/Images/display.png)

## Table of Contents

-  [Landing Page](#landing)
-  [Information](#information)
-  [Experience](#experience)
-  [completed](#completed)

## Features

- User Registration: The system allows new users to register by providing their personal information, including name, email, phone number, and date. Invalid information is validated and appropriate error messages are displayed.

- Selection: After registration, users are presented with a page to provide additional information related to their chess experience. This includes selecting their level of knowledge, choosing a chess character, and answering a Yes/No question using radio buttons. users can choose from a variety based on their interests and preferences. The system provides a list of available characters, allowing users to select character they want to participate in.

- Error Handling: The system incorporates comprehensive error handling mechanisms. If any information provided by the user is invalid or missing, appropriate error messages are displayed, guiding the user to correct the errors before proceeding.

- Navigation: Throughout the registration and exam process, the system includes intuitive navigation options. Users can easily navigate between pages, go back to previous steps, and proceed to the next step when all required information is provided.


## Pages and Functionality

### Page 1: Landing Page Start(#landing)


- Description: The registration process begins with a simple start page, where users can initiate the registration process by clicking the start button.
- Technologies used: HTML, CSS.

### Page 2: Customer Information(#information)

- Description: Users are directed to a page where they need to provide their personal information, such as name, email, phone number, and date. The system validates the information and displays error messages if any input is invalid.
- Inputs:
  - Name
  - Email
  - Phone number
  - Date
- Functionality:
  - Invalid message notification is displayed if any information is invalid.
- Technologies used: HTML, CSS, JavaScript.

### Page 3: Chess Experience(#experience)

- Description: After successfully providing personal information, users proceed to a page where they can provide details about their chess experience. This includes selecting their level of knowledge, choosing a chess character, and answering a Yes/No question. Done and back buttons are provided for easy navigation.
- Inputs:
  - Level of knowledge (input selector)
  - Character selection (input selector)
  - Yes/No decision (radio buttons)
- Functionality:
  - Done and back buttons are provided.
  - If the "Done" button is clicked and there are no errors, all the information is stored in the local storage.
- Technologies used: HTML, CSS, JavaScript.


### Page 4: Thank You

- Description: This page displays a ‘Onboarding completed’ message.
- Functionality:
- Technologies used: HTML, CSS.

## Technologies Used

- Frontend: HTML, CSS, JavaScript.
