import { contactSelectors } from '../components/contactSelectors';
import { fillInput, selectDropdown, getLocator } from '../utils/utilis';
import { Then } from '@cucumber/cucumber';

// Step to click the button to contact the agent
Then('I click the button to contact the agent', async () => {
  const contactButton = await getLocator(contactSelectors.contactButton);
  await contactButton.first().click();
});

// Step to fill in the comment box for the agent
Then('I fill in the {string} comment to the agent', async (comment) => {
  await fillInput(contactSelectors.commentBox, comment);
});

// Step to fill in the e-mail address field
Then('I fill in my {string} e-mail address', async (email) => {
  await fillInput(contactSelectors.mailInput, email);
});

// Step to select the salutation (e.g., Mr, Mrs) from a dropdown
Then('I select my {string} salutation', async (salutation) => {
  await selectDropdown(contactSelectors.salutationSelect, salutation);
});

// Step to fill in the first name field
Then('I fill in my {string} first name', async (firstname) => {
  await fillInput(contactSelectors.firstNameInput, firstname);
});

// Step to fill in the surname field
Then('I fill in my {string} surname', async (surname) => {
  await fillInput(contactSelectors.surnameInput, surname);
});

// Step to fill in the phone number field
Then('I fill in my {string} phone number', async (phone) => {
  await fillInput(contactSelectors.phoneInput, phone);
});

// Step to submit the contact agent form
Then('I click the contact agent submit button', async () => {
  const submitButton = await getLocator(contactSelectors.submitButton);
  await submitButton.click();
});
