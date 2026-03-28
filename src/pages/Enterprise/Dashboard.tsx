import {
  AlertTriangle,
  ArrowRight,
  BookA,
  Check,
  Clock9,
  Plus,
  Star,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Field, FieldLabel } from "../../components/ui/field";
import { Progress } from "../../components/ui/progress";
import { Separator } from "../../components/ui/separator";

const Dashboard = () => {
  const statisctics = [
    {
      id: 1,
      title: "Projets actifs",
      pourcentage: 12,
      icon: BookA,
      croissance: TrendingUp,
      croissancePourcentage: +12,
    },
    {
      id: 2,
      title: "Tâches en retard",
      pourcentage: 8,
      icon: Clock9,
      croissance: TrendingDown,
      croissancePourcentage: -2,
    },
    {
      id: 3,
      title: "Taux de complétion",
      pourcentage: 94.2,
      icon: Check,
      croissance: TrendingUp,
      croissancePourcentage: +5,
    },
    {
      id: 4,
      title: "Score Employé",
      pourcentage: "4.8/5",
      icon: Star,
      croissance: TrendingUp,
      croissancePourcentage: +8,
    },
  ];

  const activities = [
    {
      id: 1,
      author: "Cédric BLEOSSI",
      action: "a terminé la tâche",
      cible: "MAQUETTTE UI",
      time: "2 h",
    },
    {
      id: 2,
      author: "Mohamed MOMO",
      action: "a rejoint le projet",
      cible: "MMTE",
      time: "10 min",
    },
    {
      id: 3,
      author: "Mouhêmirou YAROU",
      action: "a terminé la tâche",
      cible: "REQUETTES BDD",
      time: "30 min",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Refonte E-commerce",
      category: "Digital / Web",
      progression: 75,
      statut: "En cours",
    },
    {
      id: 2,
      title: "Migration Cloud AWS",
      category: "Infrastructure",
      progression: 92,
      statut: "Urgent",
    },
    {
      id: 3,
      title: "App Mobile Fitness",
      category: "Produit mobile",
      progression: 30,
      statut: "En cours",
    },
    {
      id: 4,
      title: "Audit sécuirté Q3",
      category: "Compliance",
      progression: 10,
      statut: "Planifié",
    },
  ];

  return (
    <div className="p-10">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl text-primary font-bold">Tableau de bord</h1>
          <p className="text-sm text-gray-500">
            Bienvenue, Jean. Voici un apperçu de l'activité globale.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center gap-2 border rounded-md p-0.5">
            <span className="text-sm">Octobre 2026</span>
          </div>
          <Button className="h-10">
            <Plus />
            Nouveau projet
          </Button>
        </div>
      </div>

      <div className="flex gap-10 mt-8">
        <div className="w-3/4">
          <div className="grid grid-cols-4 gap-5">
            {statisctics.map((statistic) => (
              <div
                key={statistic.id}
                className="flex flex-col gap-3 h-40 bg-white shadow-md border rounded-md p-5"
              >
                <div className="flex justify-between">
                  <div className="bg-gray-100 rounded-full p-2">
                    <statistic.icon />
                  </div>
                  <div
                    className={`flex items-center justify-center gap-2 w-15 h-8 rounded-md ${
                      statistic.croissancePourcentage < 0 ? "bg-red-100" : ""
                    }`}
                  >
                    <statistic.croissance
                      className={`w-5 h-5 ${
                        statistic.croissancePourcentage < 0
                          ? "text-red-500"
                          : ""
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        statistic.croissancePourcentage < 0
                          ? "text-red-500"
                          : ""
                      }`}
                    >
                      {statistic.croissancePourcentage}
                    </span>
                  </div>
                </div>
                <span className="text-md text-gray-500">{statistic.title}</span>
                <h1 className="text-2xl font-bold">{statistic.pourcentage}</h1>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="flex justify-between">
              <h1 className="text-xl font-bold">Projets Prioritaires</h1>
              <Button variant="link" className="cursor-pointer">
                Voir tout le catalogue
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-10 mt-5">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border rounded-md p-5 shadow-md flex flex-col gap-3"
                >
                  <Badge
                    variant={
                      project.statut === "Urgent" ? "destructive" : "outline"
                    }
                  >
                    {project.statut}
                  </Badge>
                  <div>
                    <h1 className="text-xl font-semibold">{project.title}</h1>
                    <span>{project.category}</span>
                  </div>
                  <Field>
                    <FieldLabel htmlFor="progress-upload">
                      <span>Progression</span>
                      <span className="ml-auto">{project.progression}%</span>
                    </FieldLabel>
                    <Progress
                      value={project.progression}
                      id="progress-upload"
                    />
                  </Field>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-0.5 leading-none">
                      <span className="font-semibold">Cédric BLEOSSI</span>
                      <p>Responsable</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <AvatarGroup className="grayscale">
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/maxleiter.png"
                          alt="@maxleiter"
                        />
                        <AvatarFallback>LR</AvatarFallback>
                      </Avatar>
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/evilrabbit.png"
                          alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                      </Avatar>
                    </AvatarGroup>
                    <Button variant="outline">
                      Détails <ArrowRight />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col gap-10">
          <Card className="p-0 shadow-xl">
            <CardHeader className="p-0">
              <CardTitle className="flex items-center gap-2 bg-gray-200 p-3">
                <AlertTriangle className="text-red-500" />
                <h1 className="font-bold">Alertes Systèmes</h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <div className="flex justify-items-start gap-2 border-0.5 border-red-800 bg-red-100 rounded-md p-2">
                <AlertTriangle size={30} className="text-red-400" />
                <div>
                  <p className="text-sm">
                    La tâche Maquette UI MMTE doit être rendue en priorité.
                  </p>
                  <span className="text-sm">Aujourd'hui, 10:30</span>
                </div>
              </div>

              <div className="flex justify-items-start gap-2 border-0.5 border-red-800 bg-gray-100 rounded-md p-2">
                <AlertTriangle size={50} />
                <div>
                  <p className="text-sm">
                    La deadline de la tâche de réalisation de la maquette du
                    projet AMO est dangereusement proche.
                  </p>
                  <span className="text-sm">Aujourd'hui, 10:30</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-center">
              <Button variant="link" className="cursor-pointer">
                Gérer toutes les alertes
              </Button>
            </CardFooter>
          </Card>

          <Card className="p-6 shadow-xl">
            <CardTitle>
              <h1 className="text-xl font-bold">Activités récentes</h1>
              <p className="text-sm text-gray-500">
                Dernières mises à jour de l'équipe
              </p>
            </CardTitle>
            <CardContent className="flex flex-col gap-2">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h1>
                      <span className="font-bold">{activity.author}</span>{" "}
                      {activity.action}
                    </h1>
                    <span>{activity.cible}</span>
                    <div className="flex items-center gap-2">
                      <Clock9 size={15} />
                      <span>Il y a {activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="ghost">Voir le journal complet</Button>
            </CardContent>
          </Card>

          <Card className="bg-primary shadow-2xl">
            <CardHeader>
              <h1 className="text-white text-xl font-bold">Objectifs Q4</h1>
            </CardHeader>
            <CardContent>
              <p className="text-white text-md">
                Vous avez atteint 82% de vos objectifs semestriels. Continuez
                ainsi ! Vous pourrez atteindre les objectifs annuels.
              </p>
              <div className="justify-self-center mt-3">
                <Button className="bg-gray-200/20 text-white p-4 rounded-md text-sm font-medium backdrop-blur-sm h-12">
                  Télécharger votre rapport de performance trimestriel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
