 // =========================================================
// ARGOSS — PROJECT CMS
// =========================================================

const PROJECTS_REPO =
    "https://raw.githubusercontent.com/radjamkhadmicreator/ARGOSS/main/content/projects/";


async function loadProject() {

    // Vérifier si nous sommes sur la page projet
    if (!document.body.classList.contains("project-page")) {
        return;
    }

    const params = new URLSearchParams(window.location.search);

    const projectSlug = params.get("project");

    if (!projectSlug) {
        console.error("Aucun projet spécifié.");
        return;
    }

    try {

        const response = await fetch(
            `${PROJECTS_REPO}${projectSlug}.md`
        );

        if (!response.ok) {
            throw new Error("Projet introuvable.");
        }

        const markdown = await response.text();

        console.log("Projet chargé :", markdown);

        // Pour l'instant :
        // on vérifie simplement que le fichier est accessible.
        // Le parsing des données viendra ensuite.

    } catch (error) {

        console.error(
            "Erreur lors du chargement du projet :",
            error
        );

    }

}


document.addEventListener("DOMContentLoaded", loadProject);