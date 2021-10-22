//QA automation test //
const assert = require('assert');
describe('Authorization', async () => {
        await it('should login with email and check the file title', async () => {
            //athorization data//
            let test_email = 'a.chumachenko@pin-up.team';
            let test_password = 'Buy40051';

            //browser opening//
            await browser.url('https://docs.google.com/spreadsheets/d/1wV_b5TnfUw-9s-KzqhTHluDfVMkb2lQTLNUfty0ufnw/edit#gid=0');

            //insert login value//
            let login_input = await $('#identifierId');
            await login_input.setValue(test_email);

            //next button click//
            let next_btn = await $('#identifierNext');
            await next_btn.waitForClickable();
            await next_btn.click();

            //insert password//
            let password_input = await $('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input');
            await password_input.setValue(test_password);

            //click login button//
            let log_in_btn = await $('#passwordNext');
            await log_in_btn.waitForClickable();
            await log_in_btn.click();

            // await browser.debug()

            //file title check//
            let title = await $('.docs-title-input-label-inner');
            let value = await title.getText();
            await console.log(value)

            await assert.deepStrictEqual(value, 'Table for autotesting!' , "Table name is WRONG");
        });
    });