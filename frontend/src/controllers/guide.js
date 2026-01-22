/**
 * @typedef {Object} Link
 * @property {string} label - Texte du lien
 * @property {string} href - URL du lien
 * @property {boolean} [external] - Indique si le lien est externe
 */

/**
 * @typedef {Object} Task
 * @property {string} id - Identifiant unique
 * @property {string} title - Titre de la tâche
 * @property {string} [description] - Description optionnelle
 * @property {Link[]} [links] - Liens associés
 * @property {string[]} [steps] - Étapes de la tâche
 */

/**
 * @typedef {Object} Section
 * @property {"administratif"|"alimentation"|"logement"} id - Type de section
 * @property {string} title - Titre de la section
 * @property {Task[]} tasks - Liste des tâches
 * @property {string} [description] - Description optionnelle
 * @property {string[]} [steps] - Étapes de la section
 */

