export type ScheduleItem = { activity: string; time: string };
export type ConferenceDay = {
  id: number;
  session: string;
  weekday: string;
  date: string;
  items: ScheduleItem[];
};

/** Edite horários e atividades aqui — a interface lê tudo desta lista. */
export const conferenceDays: ConferenceDay[] = [
  {
    id: 1,
    session: "Sessão 1",
    weekday: "Quinta-feira",
    date: "29 de outubro",
    items: [
      { activity: "Abertura", time: "20:00" },
      { activity: "Louvor", time: "20:00" },
      { activity: "Ministração", time: "20:50" },
      { activity: "Encerramento", time: "22:30" },
    ],
  },
  {
    id: 2,
    session: "Sessão 2",
    weekday: "Sexta-feira",
    date: "30 de outubro",
    items: [
      { activity: "Início", time: "20:00" },
      { activity: "Louvor", time: "20:00" },
      { activity: "Ministração", time: "20:50" },
      { activity: "Encerramento", time: "22:30" },
    ],
  },
  {
    id: 3,
    session: "Sessão 3",
    weekday: "Sábado",
    date: "31 de outubro",
    items: [
      { activity: "Início", time: "16:00" },
      { activity: "Louvor", time: "16:00" },
      { activity: "Ministração", time: "16:50" },
      { activity: "Talk", time: "17:50" },
      { activity: "Intervalo", time: "18:50" },
      { activity: "Louvor", time: "19:50" },
      { activity: "Ministração", time: "20:30" },
      { activity: "Encerramento", time: "22:00" },
    ],
  },
];

export const speakers = [
  "Bruno Carvalho",
  "Brenno Lourenço",
  "Evandro Negs",
  "Mariana Vilas Boas",
  "Lucas Paulo",
];

/** Segundos sem toque antes de voltar à tela inicial. */
export const IDLE_TIMEOUT_SECONDS = 75;
