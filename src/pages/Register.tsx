import { ArrowRight, Lock, Mail, Phone, Shield, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../components/ui/card";
import { Field, FieldLabel } from "../components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../components/ui/input-group";
import { Checkbox } from "../components/ui/checkbox";
import { Button } from "../components/ui/button";

const Register = () => {
  return (
    <div className="flex flex-col gap-7 justify-center h-screen items-center">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-primary text-2xl text-center font-bold">Work</h1>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-center">Rejoignez l'élite</h1>
          <p className="text-center">
            Organisez la gestion de vos projets et la <br /> performance de vos
            équipe.
          </p>
        </div>
      </div>

      <Card className="p-7 shadow-xl border-none">
        <div className="flex flex-col gap-2 ml-5">
          <CardTitle className="text-2xl font-semibold">
            Informations personnelles
          </CardTitle>
          <CardDescription>
            Commencez votre aventure en tant qu'administrateur de votre <br />{" "}
            propre organisation.
          </CardDescription>
        </div>
        <CardContent>
          <form className="flex flex-col gap-5">
            <div className="flex justify-between gap-5 items-center">
              <Field className="max-w-sm">
                <FieldLabel htmlFor="inline-start-input">Prénom</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="inline-start-input"
                    placeholder="Search..."
                  />
                  <InputGroupAddon align="inline-start">
                    <User className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>

              <Field className="max-w-sm">
                <FieldLabel htmlFor="inline-start-input">Nom</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="inline-start-input"
                    placeholder="Search..."
                  />
                  <InputGroupAddon align="inline-start">
                    <User className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>

            <Field className="">
              <FieldLabel htmlFor="inline-start-input">Email</FieldLabel>
              <InputGroup>
                <InputGroupInput id="inline-start-input" placeholder="Email" />
                <InputGroupAddon align="inline-start">
                  <Mail className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <Field className="">
              <FieldLabel htmlFor="inline-start-input">Téléphone</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="inline-start-input"
                  placeholder="Téléphone"
                />
                <InputGroupAddon align="inline-start">
                  <Phone className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <div className="flex justify-between gap-5 items-center">
              <Field className="max-w-sm">
                <FieldLabel htmlFor="inline-start-input">
                  Mot de passe
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    type="password"
                    id="inline-start-input"
                    placeholder="Mot de passe"
                  />
                  <InputGroupAddon align="inline-start">
                    <Lock className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>

              <Field className="max-w-sm">
                <FieldLabel htmlFor="inline-start-input">
                  Confirmation
                </FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    type="password"
                    id="inline-start-input"
                    placeholder="Confirmation"
                  />
                  <InputGroupAddon align="inline-start">
                    <Shield className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </div>

            <div className="flex gap-2 items-center">
              <Checkbox />
              <p>
                En m'inscrivant, j'accepte les{" "}
                <span className="text-primary">
                  Conditions d'Utilisation et la Politique de <br />{" "}
                  Confidentialité de Work.
                </span>
              </p>
            </div>

            <Button className="p-5">
              Créer mon compte <ArrowRight />{" "}
            </Button>

            <p className="text-center">
              Vous avez déjà un compte ?{" "}
              <span className="text-primary">Se connecter</span>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
