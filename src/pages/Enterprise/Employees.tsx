import {
  BookA,
  ChartNoAxesCombined,
  Clock9,
  Download,
  Ellipsis,
  Filter,
  Plus,
  Search,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Field, FieldLabel } from "../../components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../components/ui/input-group";
import { Progress } from "../../components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: "Sarah Benali",
      email: "sarahbenali@gmail.com",
      role: "Développeur",
      statut: "Actif",
      performance: 92,
    },
    {
      id: 2,
      name: "Marc Lefève",
      email: "marcLefève@gmail.com",
      role: "Manager",
      statut: "Actif",
      performance: 60,
    },
    {
      name: "Julie Durant",
      email: "julieDurant@gmail.com",
      role: "QA Engineer",
      statut: "En congé",
      performance: 78,
    },
    {
      id: 3,
      name: "Thomas Morel",
      email: "thomasMorel@gmail.com",
      role: "Data Analyst",
      statut: "Actif",
      performance: 33,
    },
    {
      id: 4,
      name: "Amélie Petit",
      email: "ameliePetie@gmail.com",
      role: "Développeur",
      statut: "Actif",
      performance: 45,
    },
    {
      id: 5,
      name: "Cédric BLEOSSI",
      email: "cedricbleossi@gmail.com",
      role: "Ingénieur",
      statut: "Actif",
      performance: 88,
    },
    {
      id: 6,
      name: "Mohamed Momo",
      email: "mohammedMomo@gmail.com",
      role: "Développeur",
      statut: "Actif",
      performance: 79,
    },
    {
      id: 7,
      name: "Annael AYITE",
      email: "annaelAyite@gmail.com",
      role: "Graphiste",
      statut: "Actif",
      performance: 57,
    },
  ];

  return (
    <div className="flex flex-col gap-7 p-10">
      <div>
        <h1 className="text-2xl font-bold">GESTION DES EFFECTIFS</h1>

        <div className="flex justify-between">
          <p className="text-gray-500">
            Supervisez vos équipes, gérez les rôles et suivez les performances
            individuelles
          </p>

          <div className="flex gap-3">
            <Button variant="outline" className="p-5">
              <Download /> Exporter CSV
            </Button>
            <Button className="p-5 hover:bg-primary/80">
              <Plus /> Ajouter un employé
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
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="p-3">
            <Filter />
            Filtres avancés
          </Badge>
          <p>5 employés trouvés</p>
        </div>
      </div>

      <div className="border p-2 rounded-2xl shadow">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xl font-bold">Employé</TableHead>
              <TableHead className="text-xl font-bold">Rôle</TableHead>
              <TableHead className="text-xl font-bold">Statut</TableHead>
              <TableHead className="text-xl font-bold">
                Performance Moyenne
              </TableHead>
              <TableHead className="text-xl font-bold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell className="flex items-center gap-3 p-5">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col leading-none">
                    <h1>{employee.name}</h1>
                    <p className="text-sm text-gray-500">{employee.email}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="p-3 text-primary bg-primary/10"
                  >
                    {employee.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="p-3">
                    <Clock9 />
                    <p>{employee.statut}</p>
                  </Badge>
                </TableCell>
                <TableCell>
                  <Field>
                    <FieldLabel htmlFor="progress-upload">
                      <span>{employee.performance}%</span>
                    </FieldLabel>
                    <Progress
                      value={employee.performance}
                      id="progress-upload"
                    />
                  </Field>
                </TableCell>
                <TableCell className="justify-right">
                  <Ellipsis />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="grid grid-cols-3 gap-7">
        <div className="flex justify-between items-center bg-primary/20 border p-5 rounded-md shadow-md">
          <div className="flex flex-col">
            <span className="text-sm text-primary">Total Actifs</span>
            <h1 className="text-2xl font-bold text-primary">3.124</h1>
          </div>
          <div className="bg-gray-200 rounded-md p-3">
            <Clock9 />
          </div>
        </div>

        <div className="flex justify-between items-center bg-white border p-5 rounded-md shadow-md">
          <div className="flex flex-col">
            <span className="text-sm text-primary">Moyenne de charge</span>
            <h1 className="text-2xl font-bold text-primary">78%</h1>
          </div>
          <div className="bg-gray-200 rounded-md p-3">
            <BookA />
          </div>
        </div>

        <div className="flex justify-between items-center bg-green-50 p-5 rounded-md shadow-md border">
          <div className="flex flex-col">
            <span className="text-sm text-primary">Taux de rétention</span>
            <h1 className="text-2xl font-bold text-primary">94.2%</h1>
          </div>
          <div className="bg-gray-200 rounded-md p-3">
            <ChartNoAxesCombined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
