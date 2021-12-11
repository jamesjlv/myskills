describe('Meus primeiros testes', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });
  it('Check the register of a new skill', async () => {
    const inputNewSkill = await element(by.id('input-new'));
    const buttonAddSkill = await element(by.id('button-add'));

    await inputNewSkill.tap();
    await inputNewSkill.typeText('React Native');

    await buttonAddSkill.tap();

    await expect(element(by.id('flat-list-skills'))).toBeVisible();
  });
});
