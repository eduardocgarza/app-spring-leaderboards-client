import { BASE_URL } from "../../constants/AppConstants";

/**
 * @Users Endpoints
 */

// Get All Users
export const getAllUsersEndpoint = `${BASE_URL}/users`;

// Create User Item
export const createUserEndpoint = `${BASE_URL}/users`;

// Edit User Item
export function editUserEndpoint(userID) {
  return `${BASE_URL}/users/${userID}`;
}

// Delete User Item
export function deleteUserEndpoint(userID) {
  return `${BASE_URL}/users/${userID}`;
}

// Increment User Points
export function incrementUserPointsEndpoint(userID) {
  return `${BASE_URL}/users/${userID}/increment`;
}

// Decrement User Points
export function decrementUserPointsEndpoint(userID) {
  return `${BASE_URL}/users/${userID}/decrement`;
}
