import { BASE_URL } from "../../constants/AppConstants";

/**
 * @People Endpoints
 */

// Get All People
export const getAllPeopleEndpoint = `${BASE_URL}/people`;

// Get Person Item
export function getPersonEndpoint(personID) {
  return `${BASE_URL}/people/${personID}`;
}

// Create Person Item
export const createPersonEndpoint = `${BASE_URL}/people`;

// Upload Person Icon
export function uploadPersonIconEndpoint(personID) {
  return `${BASE_URL}/people/${personID}/icon`;
}

// Edit Person Item
export function editPersonEndpoint(personID) {
  return `${BASE_URL}/people/${personID}`;
}

// Publish Person Item
export function publishPersonEndpoint(personID) {
  return `${BASE_URL}/people/${personID}/publish`;
}

// Unpublish Person Item
export function unpublishPersonEndpoint(personID) {
  return `${BASE_URL}/people/${personID}/unpublish`;
}

// Archive Person Item
export function archivePersonEndpoint(personID) {
  return `${BASE_URL}/people/${personID}/archive`;
}

// Unarchive Person Item
export function unarchivePersonEndpoint(personID) {
  return `${BASE_URL}/people/${personID}/unarchive`;
}

// Delete Person Item
export function deletePersonEndpoint(personID) {
  return `${BASE_URL}/people/${personID}`;
}

/**
 * @Associations - Person Types
 */

// Add Person Type to Person
export function addPersonTypeToPersonEndpoint(personID, typeID) {
  return `${BASE_URL}/people/${personID}/types/${typeID}`;
}

// Remove Person Type from Person
export function removePersonTypeFromPersonEndpoint(personID, typeID) {
  return `${BASE_URL}/people/${personID}/types/${typeID}`;
}

/**
 * @Associations - Companies
 */

// Add Company to Person
export const addCompanyToPersonEndpoint = `${BASE_URL}/people/company-roles`;

// Remove Company from Person
export function removeCompanyFromPersonEndpoint(roleID) {
  return `${BASE_URL}/people/company-roles/${roleID}`;
}

/**
 * @Associations - Products
 */

// Add Product to Person
export const addProductToPersonEndpoint = `${BASE_URL}/people/product-roles`;

// Remove Product from Person
export function removeProductFromPersonEndpoint(roleID) {
  return `${BASE_URL}/people/product-roles/${roleID}`;
}
