import { ArrowRight, Diamond, EyeOffIcon, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Field, FieldLabel } from "../components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../components/ui/input-group";

const Login = () => {
  return (
    <div className="flex flex-col gap-7 justify-center h-screen items-center">
      <div className="flex gap-2 mt-10">
        <div className="bg-primary w-8 h-8 flex justify-center items-center rounded-md">
          <Diamond className="text-white !w-5 !h-5" />
        </div>
        <h1 className="text-primary text-2xl text-center font-bold">Work</h1>
      </div>

      <Card className="p-7 shadow-xl border-none">
        <div className="flex flex-col gap-2 ml-5">
          <CardTitle className="text-2xl font-semibold text-center">
            Connexion
          </CardTitle>
          <CardDescription className="text-center">
            Entrez vos identifiants pour accéder à votre espace de <br />{" "}
            travail.
          </CardDescription>
        </div>
        <CardContent>
          <form className="flex flex-col gap-5">
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
              <FieldLabel htmlFor="inline-start-input">Mot de passe</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  type="password"
                  id="inline-start-input"
                  placeholder="Mot de passe"
                />
                <InputGroupAddon align="inline-end">
                  <EyeOffIcon className="text-muted-foreground" />
                </InputGroupAddon>
              </InputGroup>
            </Field>

            <div className="flex gap-2 items-center">
              <Checkbox />
              <p>Se souvenor de moi</p>
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

export default Login;
