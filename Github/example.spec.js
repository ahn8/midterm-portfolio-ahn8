// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

const portfolioURL = 'https://github.com/NJIT-WIS/midterm-portfolio-ahn8/blob/main/index.html';

const expectedTitle = "Ameer Nazzal's Portfolio";
const expectedLogoText = 'Ameer Nazzal';
const expectedMenuItemCount = 3; // Assuming the HTML contains exactly 3 menu items.
const expectedHeroTitle = 'Want to take a look at my Tech History?';
const expectedHeroSubText = 'Take a look at my Tech Projects Here!';
const expectedHeroLinkText = 'ahn8'; // Assuming there's only one link with this text.
const expectedProgrammingLanguagesTitle = 'Programming Languages';
const expectedProgrammingLanguagesCount = 6; // There are 6 language items mentioned.
const expectedHeroSectionTaskTitle = 'My Archetype involves hardwork and sports!';
const expectedResumeTitle = 'My Resume';
const expectedTwitterTitle = 'Twitter';
const expectedTwitterSubtext = 'Take a Look at My Twitter Page';
const expectedMetaDescription = 'This is My WebPage Portfolio';

test.beforeEach(async ({ page }) => {
  await page.goto(portfolioURL);
});

test.beforeEach(async ({ page }) => {
  console.log("portfolioURL:", portfolioURL); // Log the URL
  await page.goto(portfolioURL);
});

test('Check Logo Text', async ({ page }) => {
  const logoText = await page.locator('.logo').textContent();
  expect(logoText).toBe('Ameer Nazzal');
});


test('Check Navigation Menu Items', async ({ page }) => {
  const menuItems = await page.locator('.menu-item');
  expect(await menuItems.count()).toBe(3); // Assuming 3 menu items
});

// Test 4: Check Hero Section Title
test('Check Hero Section Title', async ({ page }) => {
  const heroTitle = await page.locator('.hero h3').textContent();
  expect(heroTitle).toBe('Want to take a look at my Tech History?');
});

// Test 5: Check Programming Languages Section
test('Check Programming Languages Section', async ({ page }) => {
  const programmingLanguagesTitle = await page.locator('.programming-languages h2').textContent();
  expect(programmingLanguagesTitle).toBe('Programming Languages');
  const languagesCount = await page.locator('.programming-languages .image-container a').count();
  expect(languagesCount).toBe(6); // Assuming 6 programming languages
});

// Test 6: Check Archetype Section Title
test('Check Archetype Section Title', async ({ page }) => {
  const archetypeTitle = await page.locator('#Archetype .hero-content h2').textContent();
  expect(archetypeTitle).toBe('My Archetype involves hardwork and sports!');
});

// Test 7: Check Resume Section Title
test('Check Resume Section Title', async ({ page }) => {
  const resumeTitle = await page.locator('.resume .resume-content h2').textContent();
  expect(resumeTitle).toBe('My Resume');
});

// Test 8: Check Twitter Section Title
test('Check Twitter Section Title', async ({ page }) => {
  const twitterTitle = await page.locator('.twitter-content h2').textContent();
  expect(twitterTitle).toBe('Twitter');
});

// Test 9: Check Twitter Section Subtext
test('Check Twitter Section Subtext', async ({ page }) => {
  const twitterSubtext = await page.locator('.twitter .sub-text').textContent();
  expect(twitterSubtext).toBe('Take a Look at My Twitter Page');
});

// Test 10: Check Copyright Footer Text
test('Check Copyright Footer Text', async ({ page }) => {
  const copyrightText = await page.locator('.footer footer p').textContent();
  expect(copyrightText).toBe('Copyright; 2023 Ameer Nazzal. All rights reserved.');
});

test('Check Page Title', async ({ page }) => {
  const title = await page.title();
  expect(title).toBe(expectedTitle);
});

test('Check Logo in Header', async ({ page }) => {
  const logoText = await page.locator('.logo').textContent();
  expect(logoText).toBe(expectedLogoText);
});

test('Check Navigation Menu in Header', async ({ page }) => {
  const menuItemCount = await page.locator('nav.menu .menu-item').count();
  expect(menuItemCount).toBe(expectedMenuItemCount);
});

test('Check Hero Section Title and Subtext', async ({ page }) => {
  await expect(page.locator('.hero .hero-text h3')).toHaveText(expectedHeroTitle);
  await expect(page.locator('.hero .hero-text .sub-text')).toHaveText(expectedHeroSubText);
});

test('Check Hero Section GitHub Link Text', async ({ page }) => {
  await expect(page.locator('.hero .hero-text a.pill-link')).toHaveText(expectedHeroLinkText);
});


test('Check Archetype Section', async ({ page }) => {
  await expect(page.locator('#Archetype .hero-content h2')).toHaveText(expectedHeroSectionTaskTitle);
});

test('Check Resume Section', async ({ page }) => {
  await expect(page.locator('.resume .resume-content h2')).toHaveText(expectedResumeTitle);
});

test('Check Twitter Section', async ({ page }) => {
  await expect(page.locator('.twitter .twitter-content h2')).toHaveText(expectedTwitterTitle);
  await expect(page.locator('.twitter .sub-text')).toHaveText(expectedTwitterSubtext);
});

test('Check SEO Meta Description', async ({ page }) => {
  const metaDescription = await page.getAttribute('meta[name="description"]', 'content');
  expect(metaDescription).toBe(expectedMetaDescription);
})

test('Check Resume Link in Navigation Menu', async ({ page }) => {
  const resumeLink = await page.locator('.menu-item:has-text("Resume")');
  expect(await resumeLink.isVisible()).toBe(true);
});

test('Check Page Header Title', async ({ page }) => {
  const headerTitle = await page.locator('header h1').textContent();
  expect(headerTitle).toBe('My Road to a Successful Technology Career');
});

