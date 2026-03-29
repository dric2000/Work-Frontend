import {
  Archive,
  BookA,
  Calendar,
  Clock9,
  Ellipsis,
  Funnel,
  LayoutList,
  List,
  ListFilter,
  Plus,
  Search,
  SquareCheckBig,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Field, FieldGroup } from "../../components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../components/ui/input-group";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";

const Tasks = () => {
  const tasks = [
    {
      id: "TASK-1024",
      title: "Finalisation du design système entreprise",
      project: "Refonte UI 2024",
      worker: "Sophie Laurent",
      deadline: "24/04/2026",
      statut: "En cours",
      priority: "Haute",
    },
    {
      id: "TASK-1025",
      title: "Développement API authentification",
      project: "Backend Sécurité",
      worker: "Mohamed Diallo",
      deadline: "18/04/2026",
      statut: "En cours",
      priority: "Haute",
    },
    {
      id: "TASK-1026",
      title: "Tests unitaires module paiement",
      project: "E-commerce V2",
      worker: "Alice Dupont",
      deadline: "20/04/2026",
      statut: "En attente",
      priority: "Moyenne",
    },
    {
      id: "TASK-1027",
      title: "Correction bugs interface dashboard",
      project: "Refonte UI 2024",
      worker: "Jean Martin",
      deadline: "15/04/2026",
      statut: "Terminé",
      priority: "Basse",
    },
    {
      id: "TASK-1028",
      title: "Intégration Stripe",
      project: "E-commerce V2",
      worker: "Fatou Ndiaye",
      deadline: "22/04/2026",
      statut: "En cours",
      priority: "Haute",
    },
    {
      id: "TASK-1029",
      title: "Optimisation performances base de données",
      project: "Infra Cloud",
      worker: "David Koffi",
      deadline: "30/04/2026",
      statut: "En attente",
      priority: "Moyenne",
    },
  ];

  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <SquareCheckBig className="text-primary" />
          <h1 className="text-xl font-semibold text-primary">
            GESTION OPERATIONNELLE
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Gestion des Tâches</h1>
            <p className="text-md text-gray-500">
              Visualisez et gérez l'avancement des objectifs de vos équipes.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="p-5 h-10">
              <Archive />
              Archives
            </Button>
            <Button className="p-5 h-10">
              <Plus />
              Nouvelle tâche
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-between border p-3 rounded-md shadow">
        <InputGroup className="w-80">
          <InputGroupInput
            id="inline-start-input"
            placeholder="Rechercher par nom, rôle ou email"
          />
          <InputGroupAddon align="inline-start">
            <Search className="text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
        <Separator orientation="vertical" />
        <div className="flex items-center gap-3">
          <ListFilter />
          <p>Trier par Date</p>
        </div>
        <Separator orientation="vertical" />
        <div className="flex items-center gap-3">
          <div className="bg-gray-300 p-2 rounded-md">
            <List />
          </div>
          <LayoutList />
        </div>
      </div>

      <div className="flex justify-between gap-10">
        <div className="w-1/4">
          <Card className="border shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <Funnel className="text-primary" />
                    <span>FILTRES AVANCES</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  <Button variant="link">Réinitialiser</Button>
                </CardDescription>
              </div>
            </CardHeader>
            <Separator />
            <CardContent>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl text-primary font-semibold">Statut</h1>
                  <div>
                    <FieldGroup className="max-w-sm flex flex-col gap-1">
                      <Field orientation="horizontal">
                        <Checkbox
                          id="terms-checkbox"
                          name="terms-checkbox"
                          className="text-primary border-10"
                        />
                        <Label htmlFor="terms-checkbox" className="text-xl">
                          A faire
                        </Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox
                          id="terms-checkbox"
                          name="terms-checkbox"
                          className="text-primary border-10"
                        />
                        <Label htmlFor="terms-checkbox" className="text-xl">
                          En cours
                        </Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox
                          id="terms-checkbox"
                          name="terms-checkbox"
                          className="text-primary border-10"
                        />
                        <Label htmlFor="terms-checkbox" className="text-xl">
                          En révision
                        </Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox
                          id="terms-checkbox"
                          name="terms-checkbox"
                          className="text-primary border-10"
                        />
                        <Label htmlFor="terms-checkbox" className="text-xl">
                          Terminé
                        </Label>
                      </Field>
                    </FieldGroup>
                  </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl text-primary font-semibold">
                    Priorité
                  </h1>
                  <div>
                    <FieldGroup className="max-w-sm">
                      <Field orientation="horizontal">
                        <Checkbox
                          id="terms-checkbox"
                          name="terms-checkbox"
                          className="text-primary border-10"
                        />
                        <Label htmlFor="terms-checkbox" className="text-xl">
                          Haute
                        </Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox
                          id="terms-checkbox"
                          name="terms-checkbox"
                          className="text-primary border-10"
                        />
                        <Label htmlFor="terms-checkbox" className="text-xl">
                          Moyenne
                        </Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox
                          id="terms-checkbox"
                          name="terms-checkbox"
                          className="text-primary border-10"
                        />
                        <Label htmlFor="terms-checkbox" className="text-xl">
                          Basse
                        </Label>
                      </Field>
                    </FieldGroup>
                  </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-3">
                  <h1 className="text-xl text-primary font-semibold">
                    Projets
                  </h1>
                  <div>
                    <FieldGroup className="max-w-sm">
                      <Field orientation="horizontal">
                        <Checkbox
                          id="terms-checkbox"
                          name="terms-checkbox"
                          className="text-primary border-10"
                        />
                        <Label htmlFor="terms-checkbox" className="text-xl">
                          Refonte UI 2024
                        </Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox
                          id="terms-checkbox"
                          name="terms-checkbox"
                          className="text-primary border-10"
                        />
                        <Label htmlFor="terms-checkbox" className="text-xl">
                          MMTE
                        </Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox
                          id="terms-checkbox"
                          name="terms-checkbox"
                          className="text-primary border-10"
                        />
                        <Label htmlFor="terms-checkbox" className="text-xl">
                          AMO
                        </Label>
                      </Field>
                      <Field orientation="horizontal">
                        <Checkbox
                          id="terms-checkbox"
                          name="terms-checkbox"
                          className="text-primary border-10"
                        />
                        <Label htmlFor="terms-checkbox" className="text-xl">
                          ARCA
                        </Label>
                      </Field>
                    </FieldGroup>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-3/4 flex flex-col gap-8">
          <div className="flex gap-3 items-center border bg-gray-100 p-5 shadow rounded-md">
            <Checkbox
              id="terms-checkbox"
              name="terms-checkbox"
              className="text-primary border-10"
            />
            <Label htmlFor="terms-checkbox" className="text-xl">
              Sélectionner tout
            </Label>
          </div>
          <div className="flex flex-col gap-10">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="border-2 shadow p-5 rounded-md flex flex-col gap-3"
              >
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <Checkbox
                      id="terms-checkbox"
                      name="terms-checkbox"
                      className="text-primary border-10"
                    />
                    <div className="flex flex-col gap-3">
                      <span className="text-gray-500">{task.id}</span>
                      <h1>{task.title}</h1>
                      <div className="flex items-center gap-2">
                        <BookA className="text-gray-500" />
                        <span className="text-gray-500">{task.project}</span>
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant={
                      task.priority === "Haute" ? "destructive" : "outline"
                    }
                  >
                    {task.priority}
                  </Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2 ml-8">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <span>{task.worker}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="text-gray-500" />
                      <span className="text-gray-500">{task.deadline}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">
                      <Clock9 />
                      {task.statut}
                    </Badge>
                    <Ellipsis />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
