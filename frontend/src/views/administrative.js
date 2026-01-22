// Data and default export used by AdministrativePage and App
export const administratif = {
  title: "Démarches administratives",
  tasks: [
    {
      id: 1,
      title: "Inscription à la sécurité sociale",
      description: "Procédure pour s'inscrire à la sécurité sociale étudiante ou générale.",
      steps: [
        "Rassembler les documents requis (identité, justificatif de domicile)",
        "Remplir le formulaire en ligne ou se rendre au guichet",
        "Suivre les instructions pour la confirmation"
      ],
      links: [
        { label: "Service public", href: "https://www.service-public.fr" }
      ]
    },
    {
      id: 2,
      title: "Demande de titre de séjour",
      description: "Informations et étapes pour demander un titre de séjour.",
      steps: [
        "Vérifier les conditions selon votre situation",
        "Préparer dossier et justificatifs",
        "Prendre rendez-vous à la préfecture"
      ],
      links: []
    }
  ]
};

export default administratif;
