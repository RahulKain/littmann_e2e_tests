# Test Cases: Littmann Stethoscopes E2E Automation

## Document Information
- **Application:** Littmann Stethoscopes India
- **URL:** https://www.littmann.in/3M/en_IN/littmann-stethoscopes-in/
- **Framework:** Playwright + TypeScript
- **Total Modules:** 6
- **Total Test Cases:** 64 (planned)

---

## Module Overview

| Module | Name | Test Cases | Status |
|--------|------|------------|--------|
| M1 | Navigation & Page Load | TC001-TC012 | ✅ Complete |
| M2 | Search Functionality | TC013-TC022 | ✅ Complete |
| M3 | Product Catalog | TC023-TC036 | ✅ Complete |
| M4 | Contact Form | TC037-TC046 | ✅ Complete |
| M5 | Dealer Locator | TC047-TC054 | ✅ Complete |
| M6 | UI Consistency | TC055-TC064 | ✅ Complete |

---

## Module 1: Navigation & Page Load

**Objective:** Verify all navigation menu items function correctly and pages load successfully.

**Priority:** Critical

**Test Case Count:** 12

| TC ID | Title | Priority | Type | Preconditions | Steps | Expected Results | Test Data |
|-------|-------|----------|------|---------------|-------|------------------|-----------|
| **TC001** | Verify homepage loads successfully | P0 | Functional | Browser is open | 1. Navigate to base URL<br>2. Wait for page to load<br>3. Verify page title<br>4. Verify hero section is visible | - Page loads without errors<br>- Page title contains "Littmann"<br>- Hero section with stethoscope image is displayed<br>- Main navigation is visible | URL: `https://www.littmann.in/3M/en_IN/littmann-stethoscopes-in/` |
| **TC002** | Verify Products menu navigation | P0 | Functional | User is on homepage | 1. Hover over "Products" menu<br>2. Verify dropdown appears<br>3. Verify submenu items are visible | - Dropdown menu appears<br>- Submenu contains: Accessories, Cardiology, Classic, Digital, Lightweight, All Products | N/A |
| **TC003** | Verify "All Products" page load | P0 | Functional | User is on homepage | 1. Click "Products" menu<br>2. Click "All Products" link<br>3. Wait for page to load<br>4. Verify URL<br>5. Verify product grid is displayed | - URL contains `/p/`<br>- Product listing page loads<br>- Product cards are visible<br>- Filter sidebar is present | Expected URL: `https://www.littmann.in/3M/en_IN/p/` |
| **TC004** | Verify "Our Innovation" menu navigation | P1 | Functional | User is on homepage | 1. Hover over "Our Innovation" menu<br>2. Verify dropdown appears<br>3. Verify submenu items | - Dropdown menu appears<br>- Submenu contains: Why Choose, CORE Digital, Testimonials | N/A |
| **TC005** | Verify "Why Choose" page load | P1 | Functional | User is on homepage | 1. Click "Our Innovation" menu<br>2. Click "Why Choose" link<br>3. Wait for page to load<br>4. Verify URL and content | - URL contains `/why-choose/`<br>- Page loads successfully<br>- Brand value content is displayed | Expected URL: `https://www.littmann.in/3M/en_IN/littmann-stethoscopes-in/advantages/why-choose/` |
| **TC006** | Verify "Tools & Resources" menu navigation | P1 | Functional | User is on homepage | 1. Hover over "Tools & Resources" menu<br>2. Verify dropdown appears<br>3. Verify submenu items | - Dropdown menu appears<br>- Submenu contains: Stethoscope Care, Authenticity, Warranty & Repairs, FAQs, Contact Us | N/A |
| **TC007** | Verify "Contact Us" page load | P0 | Functional | User is on homepage | 1. Click "Tools & Resources" menu<br>2. Click "Contact Us" link<br>3. Wait for page to load<br>4. Verify URL and page elements | - URL contains `/contact-us/`<br>- Contact page loads successfully<br>- "Show Form" button is visible<br>- Contact information is displayed | Expected URL: `https://www.littmann.in/3M/en_IN/littmann-stethoscopes-in/advantages/contact-us/` |
| **TC008** | Verify "Education & Training" menu navigation | P1 | Functional | User is on homepage | 1. Click "Education & Training" menu<br>2. Verify page navigation or dropdown | - Navigation works correctly<br>- Educational content is accessible | N/A |
| **TC009** | Verify "Latest News" menu navigation | P1 | Functional | User is on homepage | 1. Click "Latest News" menu<br>2. Verify page navigation | - News page loads or dropdown appears<br>- News content is accessible | N/A |
| **TC010** | Verify "Where to Buy" menu navigation | P0 | Functional | User is on homepage | 1. Click "Where to Buy" menu<br>2. Wait for page to load<br>3. Verify URL and content | - URL contains `/where-to-buy/`<br>- Dealer locator page loads<br>- Online and offline options are visible | Expected URL: `https://www.littmann.in/3M/en_IN/littmann-stethoscopes-in/products/where-to-buy-stethoscope/` |
| **TC011** | Verify breadcrumb navigation on product page | P2 | Functional | User is on a product detail page | 1. Navigate to any product detail page<br>2. Verify breadcrumb is displayed<br>3. Click on breadcrumb links<br>4. Verify navigation works | - Breadcrumb shows: India > 3M Littmann Stethoscopes<br>- Clicking breadcrumb links navigates correctly<br>- User can navigate back to parent pages | N/A |
| **TC012** | Verify footer navigation links | P1 | Functional | User is on any page | 1. Scroll to footer<br>2. Verify footer sections are visible<br>3. Click "Where to Buy" footer link<br>4. Click "Contact Us" footer link<br>5. Verify navigation | - Footer is visible and properly formatted<br>- All footer links are clickable<br>- Footer links navigate to correct pages | N/A |

---

## Module 2: Search Functionality

**Objective:** Validate search feature with various input scenarios.

**Priority:** Critical

**Test Case Count:** 10

| TC ID | Title | Priority | Type | Preconditions | Steps | Expected Results | Test Data |
|-------|-------|----------|------|---------------|-------|------------------|-----------|
| **TC013** | Verify search bar visibility | P0 | Functional | User is on homepage | 1. Navigate to homepage<br>2. Verify search bar is visible in header<br>3. Verify placeholder text | - Search bar is visible<br>- Placeholder text says "Search" | N/A |
| **TC014** | Verify valid product search | P0 | Functional | User is on homepage | 1. Enter valid product name<br>2. Click search icon or press Enter<br>3. Wait for results page<br>4. Verify results | - Search results page loads<br>- At least one relevant product is displayed<br>- Search query is visible in search bar | Product: "Master Cardiology" |
| **TC015** | Verify partial keyword search | P1 | Functional | User is on homepage | 1. Enter partial product name<br>2. Execute search<br>3. Verify results | - Relevant products are displayed<br>- Results match the partial keyword | Keyword: "Cardio" |
| **TC016** | Verify no results found | P1 | Functional | User is on homepage | 1. Enter invalid product name<br>2. Execute search<br>3. Verify "No results" message | - Search results page loads<br>- "No results found" message is displayed<br>- Suggestions may be shown | Query: "xyz123invalid" |
| **TC017** | Verify special characters search | P2 | Functional | User is on homepage | 1. Enter special characters<br>2. Execute search<br>3. Verify application handling | - Application handles input gracefully<br>- "No results found" or sanitized search<br>- No application error/crash | Query: "@#$%^" |
| **TC018** | Verify search by SKU/Model Number | P1 | Functional | User is on homepage | 1. Enter valid SKU/Model number<br>2. Execute search<br>3. Verify specific product result | - Specific product associated with model number is displayed | SKU: "2161" (Master Cardiology Black) |
| **TC019** | Verify search input max length | P2 | Functional | User is on homepage | 1. Enter very long string (e.g., 100+ chars)<br>2. Execute search<br>3. Verify handling | - Input is accepted or truncated<br>- No UI layout breakage<br>- Search handles long query gracefully | String: "Stethoscope" * 20 |
| **TC020** | Verify clearing search results | P2 | Functional | User is on search results page | 1. Clear search input<br>2. Press Enter or Search<br>3. Verify behavior | - System handles empty search (stays on page or clears results) | N/A |
| **TC021** | Verify navigation from search results | P1 | Functional | User has search results | 1. Click on a product in search results<br>2. Verify redirection to PDP | - User is redirected to correct Product Detail Page<br>- PDP details match clicked product | N/A |
| **TC022** | Verify search history/suggestions (if applicable) | P2 | Functional | User is on homepage | 1. Click into search bar<br>2. Type first few letters<br>3. Check for auto-suggestions | - Auto-suggestions appear (if feature exists)<br>- Suggestions are relevant to input | Input: "Cla" |

---

## Module 3: Product Catalog

**Objective:** Test product listing, filtering, and detail page functionality.

**Priority:** High

**Test Case Count:** 14

| TC ID | Title | Priority | Type | Preconditions | Steps | Expected Results | Test Data |
|-------|-------|----------|------|---------------|-------|------------------|-----------|
| **TC023** | Verify "All Products" (PLP) load | P0 | Functional | User is on homepage | 1. Navigate to "Products" > "All Products"<br>2. Wait for page load<br>3. Verify PLP structural elements | - Page header "All Products" is visible<br>- Filter sidebar is present<br>- Product grid is populated<br>- Pagination (if applicable) is visible | N/A |
| **TC024** | Verify product filtering by Category | P1 | Functional | User is on PLP | 1. Click on a Category filter (e.g., "Cardiology")<br>2. Wait for grid update<br>3. Verify displayed products | - URL updates (if applicable)<br>- Product count changes<br>- Only Cardiology stethoscopes are displayed | Filter: "Cardiology" |
| **TC025** | Verify product filtering by Color | P2 | Functional | User is on PLP | 1. Expand Color filter<br>2. Select a specific color (e.g., Black)<br>3. Wait for grid update<br>4. Verify results | - Products filtered by color<br>- Images match selected color | Color: "Black" |
| **TC026** | Verify clearing filters | P2 | Functional | User has active filters | 1. Click "Clear All" or remove individual filter<br>2. Wait for grid update<br>3. Verify all products displayed | - Filters are removed<br>- Product count resets to total<br>- Default sort order is restored | N/A |
| **TC027** | Verify product card details | P1 | Functional | User is on PLP | 1. Inspect a single product card<br>2. Verify key information | - Product Image is visible<br>- Product Name is present<br>- "3M ID" or SKU is visible (if applicable)<br>- "Where to Buy" is present | N/A |
| **TC028** | Verify navigation to Product Detail Page (PDP) | P0 | Functional | User is on PLP | 1. Click on a product name/image<br>2. Wait for PDP load<br>3. Verify URL and header | - URL corresponds to product<br>- PDP loads successfully<br>- Product Title matches clicked item | N/A |
| **TC029** | Verify PDP Image Gallery | P2 | Functional | User is on PDP | 1. Click through product images/thumbnails<br>2. Verify main image updates<br>3. Verify zoom functionality (if available) | - Main image changes on thumbnail click<br>- Images are high resolution<br>- No broken images | N/A |
| **TC030** | Verify PDP "Specifications" section | P1 | Functional | User is on PDP | 1. Scroll to Specifications tab/section<br>2. Verify data grid | - Technical specs are visible (Length, Weight, etc.)<br>- Data is formatted correctly | N/A |
| **TC031** | Verify PDP "Resources" section | P2 | Functional | User is on PDP | 1. Navigate to Resources section<br>2. Click on a brochure/manual link<br>3. Verify download or new tab | - PDF opens in new tab or downloads<br>- Link is valid (no 404) | N/A |
| **TC032** | Verify "Where to Buy" button on PDP | P0 | Functional | User is on PDP | 1. Click "Where to Buy" button<br>2. Verify modal or redirection | - "Where to Buy" modal opens OR user redirected to dealer page<br>- Valid retailer options are shown | N/A |
| **TC033** | Verify Related Products / Recommendations | P3 | Functional | User is on PDP | 1. Scroll to "You May Also Like" section<br>2. Verify presence of products | - Recommended products are displayed<br>- User can navigate to them | N/A |
| **TC034** | Verify "Write a Review" functionality check | P2 | Functional | User is on PDP | 1. Check for "Reviews" section<br>2. Click "Write a Review"<br>3. Verify form or login prompt | - Review form opens (if functionality exists)<br>- Appropriate prompts for unauthenticated user | N/A |
| **TC035** | Verify PDP mobile responsiveness | P1 | UI | User is on mobile view | 1. Resize viewport to mobile width<br>2. Verify layout stack<br>3. Verify image carousel swipe | - Elements stack vertically<br>- No horizontal scrollbar<br>- Touch interactions work | Viewport: 375x667 |
| **TC036** | Verify broken links on PDP | P2 | Functional | User is on PDP | 1. Scan all links on page<br>2. Verify response codes | - No 404 errors for any link on the page | N/A |

---

## Module 4: Contact Form

**Objective:** Validate contact form fields, validation, and submission.

**Priority:** High

**Test Case Count:** 10

| TC ID | Title | Priority | Type | Preconditions | Steps | Expected Results | Test Data |
|-------|-------|----------|------|---------------|-------|------------------|-----------|
| **TC037** | Verify Contact Us page load | P0 | Functional | User is on homepage | 1. Navigate to "Tools & Resources" > "Contact Us"<br>2. Wait for page load<br>3. Verify page header and introductory text | - Page loads successfully<br>- Header "Contact Us" matches<br>- User can see contact options | N/A |
| **TC038** | Verify "Show Form" toggle | P1 | UI | User is on Contact Us page | 1. Locate "Show Form" / "Email Us" toggle or button<br>2. Click to expand<br>3. Verify visibility | - Contact form expands and becomes visible<br>- Input fields are accessible | N/A |
| **TC039** | Verify form fields presence | P1 | UI | User has opened contact form | 1. Inspect all form fields<br>2. Verify labels and placeholders | - Fields present: Subject, Message, First Name, Last Name, Email, Country, Professional Category, Specialty<br>- Labels are correct | N/A |
| **TC040** | Verify mandatory field validation | P0 | Functional | User has opened contact form | 1. Leave all fields empty<br>2. Click "Submit"<br>3. Verify error messages | - Form is NOT submitted<br>- Inline error messages appear for all required fields | N/A |
| **TC041** | Verify valid form submission | P0 | Functional | User has opened contact form | 1. Fill all required fields with valid data<br>2. Click "Submit"<br>3. Verify success state | - Form submits successfully<br>- "Thank You" message or redirect occurs<br>- No validation errors | Valid Data Set |
| **TC042** | Verify invalid email format | P1 | Functional | User has opened contact form | 1. Enter invalid email (e.g., "user@domain")<br>2. Tab away or submit<br>3. Verify validation | - Error message: "Please enter a valid email address"<br>- Field highlighted as error | Email: "invalid-email" |
| **TC043** | Verify "Professional Category" dropdown | P2 | Functional | User has opened contact form | 1. Click "Professional Category" dropdown<br>2. specific option (e.g., "Student")<br>3. Verify selection | - Dropdown opens<br>- Option is selectable<br>- Dependent fields (if any) update | Category: "Student" |
| **TC044** | Verify "Specialty" dropdown interactions | P2 | Functional | User has opened contact form | 1. Select a Category first (if required)<br>2. Check "Specialty" options<br>3. Select an option | - Specialty dropdown is active<br>- Options are relevant to category | Specialty: "Cardiology" |
| **TC045** | Verify Privacy Policy link in form | P2 | Functional | User has opened contact form | 1. Locate Privacy Policy link/checkbox<br>2. Click link<br>3. Verify navigation | - Privacy Policy opens in new tab/modal<br>- User context is preserved on form | N/A |
| **TC046** | Verify form Reset/Clear functionality | P3 | Functional | User has filled form | 1. Fill form fields<br>2. Refresh page or navigate away and back<br>3. Verify form state | - Form fields are cleared/reset<br>- No sensitive data persists | N/A |

---

## Module 5: Dealer Locator

**Objective:** Test "Where to Buy" functionality and dealer links.

**Priority:** Medium

**Test Case Count:** 8

| TC ID | Title | Priority | Type | Preconditions | Steps | Expected Results | Test Data |
|-------|-------|----------|------|---------------|-------|------------------|-----------|
| **TC047** | Verify "Where to Buy" page load | P1 | Functional | User is on homepage | 1. Navigate to "Where to Buy"<br>2. Wait for page load<br>3. Verify header and options | - Page loads successfully<br>- Header "Where to Buy" (or similar) is visible<br>- Options for Online and Offline buying are present | N/A |
| **TC048** | Verify Online Retailers links | P0 | Functional | User is on Dealer page | 1. Locate "Online Retailers" section<br>2. Click an external link (e.g., Amazon, Flipkart)<br>3. Verify behavior | - New tab opens<br>- URL belongs to retailer<br>- Page is relevant to Littmann | Retailer: "Amazon" |
| **TC049** | Verify redirection warning modal | P2 | Functional | User is on Dealer page | 1. Click on an external retailer link<br>2. Check for intermediate modal (if implemented) | - "You are leaving 3M site" modal/popup appears (if designed)<br>- User can confirm or cancel | N/A |
| **TC050** | Verify "Find a Store" (Offline) search | P1 | Functional | User is on Dealer page | 1. Navigate to Store Locator section<br>2. Enter a city or pin code<br>3. Click Search | - Map or List updates<br>- Relevant stores in that location are shown | Location: "Mumbai" |
| **TC051** | Verify Store Locator no results | P2 | Functional | User is on Dealer page | 1. Enter invalid location/pincode<br>2. Click Search<br>3. Verify message | - "No stores found" message appears<br>- Map remains at default or shows empty state | Location: "000000" |
| **TC052** | Verify Dealer details visibility | P2 | Functional | User has search results | 1. Click on a store result<br>2. Verify details displayed | - Store Name, Address, Phone Number are visible<br>- "Get Directions" link (optional) is present | N/A |
| **TC053** | Verify "Get Directions" link | P3 | Functional | User is on Dealer details | 1. Click "Get Directions"<br>2. Verify new tab | - Opens Google Maps (or map provider)<br>- Destination is set to store address | N/A |
| **TC054** | Verify "Authorized Dealer" badge/info | P2 | Functional | User is on Dealer page | 1. Inspect text/banners<br>2. Verify authenticity messaging | - Messaging confirming dealers are "Authorized" is visible | N/A |

---

## Module 6: UI Consistency

**Objective:** Verify UI elements, footer links, and accessibility.

**Priority:** Medium

**Test Case Count:** 10

| TC ID | Title | Priority | Type | Preconditions | Steps | Expected Results | Test Data |
|-------|-------|----------|------|---------------|-------|------------------|-----------|
| **TC055** | Verify Cookie Consent Banner | P1 | UI | User visits site for first time (incognito) | 1. Launch URL in clear session<br>2. Verify banner appearance<br>3. Accept cookies | - Cookie banner is visible at bottom/top<br>- Banner disappears after clicking Accept | N/A |
| **TC056** | Verify Header Sticky/Fixed behavior | P2 | UI | User is on homepage | 1. Scroll down the page<br>2. Verify header position | - Header remains fixed at top OR disappears/reappears (depending on design)<br>- Navigation remains accessible | N/A |
| **TC057** | Verify Footer social media links | P2 | UI | User is on any page | 1. Scroll to Footer<br>2. Click Social Media icons (FB, Twitter, etc.)<br>3. Verify destinations | - New tabs open<br>- URLs match official 3M/Littmann social pages | N/A |
| **TC058** | Verify "Legal Information" page | P2 | Functional | User is on any page | 1. Click "Legal Information" in footer<br>2. Verify page load | - Legal/Terms of Use page loads<br>- Text is readable | N/A |
| **TC059** | Verify "Privacy Policy" page | P1 | Functional | User is on any page | 1. Click "Privacy Policy" in footer<br>2. Verify page load | - Privacy Policy page loads correctly | N/A |
| **TC060** | Verify Region/Country Selector | P2 | Functional | User is on header | 1. Click Region selector (e.g., "India - English")<br>2. Verify dropdown or page<br>3. Select another region (if available) | - Region options are displayed<br>- Changing region redirects to respective local site (optional verification) | N/A |
| **TC061** | Verify Responsive Layout (Mobile) | P1 | UI | User is on mobile view | 1. Set viewport to 375x667<br>2. Verify Hamburger menu<br>3. Verify content stacking | - Hamburger menu visible and functional<br>- No horizontal scrolling<br>- Text is readable without zoom | Viewport: 375x667 |
| **TC062** | Verify Responsive Layout (Tablet) | P2 | UI | User is on tablet view | 1. Set viewport to 768x1024<br>2. Verify grid layouts | - grids change from 4-col to 2-col or similar<br>- Touch targets are adequate size | Viewport: 768x1024 |
| **TC063** | Verify Accessibility (Basic ARIA) | P2 | Accessibility | User is on homepage | 1. Inspect Search Input<br>2. Inspect Main Nav<br>3. Verify ARIA labels | - Search input has aria-label/placeholder<br>- Nav has role="navigation"<br>- Images have alt text | N/A |
| **TC064** | Verify Favicon and Page Title Consistency | P3 | UI | User is on multiple pages | 1. Navigate to Home, Product, Contact<br>2. Verify Browser Tab Title<br>3. Verify Favicon | - Title updates relevant to page content<br>- Favicon is consistent 3M/Littmann logo | N/A |

---

## Test Case Summary

**PROJECT COMPLETE**

**Total Modules Generated:** 6
**Total Test Cases:** 64

| Module | Status | TCs |
|--------|--------|-----|
| M1: Navigation | ✅ | 12 |
| M2: Search | ✅ | 10 |
| M3: Products | ✅ | 14 |
| M4: Contact | ✅ | 10 |
| M5: Dealer | ✅ | 8 |
| M6: UI/A11y | ✅ | 10 |

---

## Notes

> [!SUCCESS]
> All test modules have been successfully generated and documented. Phase 2 (Test Planning) is now complete.

