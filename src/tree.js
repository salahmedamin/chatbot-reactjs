import { addMessage } from "./dispatches/addMessage";
import { addOptions } from "./dispatches/addOptions";

const agencies = [
  {
    location: "Ariana",
    workTime: "8AM–6PM",
    phone: "71 750 750",
  },
  {
    location: "Rue de Mauritanie",
    workTime: "8AM:–4:30PM",
    phone: "71 784 544",
  },
  {
    location: "Ariana",
    workTime: "8AM:–4:30PM",
    phone: "71 234 725",
  },
  {
    location: "Rue de Mauritanie, Tunis",
    workTime: "8AM:–4:30PM",
    phone: "71 234 725",
  },
  {
    location: "R48V+5P5",
    workTime: "8AM:–4:30PM",
    phone: "58 719 518",
  },
  {
    location: "cité ennasr 2, Ariéna",
    workTime: "8AM–7PM",
    phone: "22 613 553",
  },
  {
    location: " cité les pins, Tunis 1053",
    workTime: "8AM–5PM",
    phone: "70 026 000",
  },
  {
    location: "de la liberté, Ariana 2091",
    workTime: "8AM–6PM",
    phone: "71 750 750",
  },
];

export const tree = [
  {
    name: "Production service",
    text: "Welcome to production service section, how can I help you ?",
    requiresAuth: false,
    children: ["Check insurance state"],
  },
  {
    name: "Check insurance state",
    requiresAuth: true,
    function: () => {
        addMessage({
            isSender: false,
            content: "Your golden plan insurance ends in 2 years",
          });
        addOptions({ options: [] });
    },
  },
  {
    name: "Disaster",
    requiresAuth: true,
    children: ["Check disaster report status", "Create new disaster report"],
  },
  {
    name: "Information Technology",
    requiresAuth: true,
    children: ["Check disaster report status", "Create new disaster report"],
  },
  {
    name: "Furnitures",
    requiresAuth: true,
    children: ["Check disaster report status", "Create new disaster report"],
  },
  {
    name: "Children",
    requiresAuth: true,
    children: ["Check disaster report status", "Create new disaster report"],
  },
  {
    name: "Vehicles",
    requiresAuth: true,
    children: ["Check disaster report status", "Create new disaster report"],
  },
  {
    name: "Disaster",
    requiresAuth: true,
    children: ["Check disaster report status", "Create new disaster report"],
  },
  {
    name: "Check disaster report status",
    requiresAuth: true,
    function: () => {
      addMessage({
        isSender: false,
        content: "ID Report",
      });
      addOptions({ options: [] });
    },
    nextInputSubmit: () => {
      window.nextInputSubmit = (id) =>
        addMessage({
          isSender: false,
          content:
            "Report with ID " +
            id +
            " is still in progess, this information can be accessed anywhere from this bot, you will be shortly notified when this report gets updated.",
        });
    },
  },
  {
    name: "Create new disaster report",
    requiresAuth: true,
    function: () =>
      (window.location.href =
        "https://www.assurancesami.com/fr/content/declaration-de-sinistre-automobile"),
  },
  {
    name: "About us",
    requiresAuth: false,
    children: ["Agencies", "Ami Assurance's Goal"],
  },
  {
    name: "Ami Assurance's Goal",
    requiresAuth: false,
    function: ()=>{
        addOptions({options:[]})
        addMessage({
            isSender: false,
            content:"Ami Insurance's Goal is to help you provide a safe future for your self and family, to keep all what you love safe, be sure, for we are masters in securing 👌"
        })
    }
  },
  {
    name: "Agencies",
    requiresAuth: false,
    function: () => {
      addOptions({options:[]})
      agencies.forEach((a) =>
        addMessage({
          isSender: false,
          content: `Ami Assurances in ${a.location}, phone ${a.phone}, worktime ${a.workTime}`,
        })
      );
    },
  },
];
