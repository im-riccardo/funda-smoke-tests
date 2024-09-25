// Object containing CSS selectors for elements on the contact page.
export const contactSelectors = {
  // Selector for the button to initiate contact via email
  contactButton:      'a:has-text("Stuur e-mail")',

  // Selector for the comment input box
  commentBox:         '#Opmerking',

  // Selector for the email input field
  mailInput:          '#Email',

  // Selector for the salutation dropdown
  salutationSelect:   '#select-salutation-type',

  // Selector for the first name input field
  firstNameInput:     '#Voornaam',

  // Selector for the surname input field
  surnameInput:       '#Achternaam',

  // Selector for the phone number input field
  phoneInput:         '#Telefoon',

  // Selector for the submit button for the contact form
  submitButton:       'input[value="Versturen"]',
};
