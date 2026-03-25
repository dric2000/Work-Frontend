// import { Link } from "react-router-dom"
import { Bell, Building2, ChevronRight, CircleQuestionMark, MessageSquare, Search } from "lucide-react"
import { Button } from "../../components/ui/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../../components/ui/input-group"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList
} from "../../components/ui/navigation-menu"
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "../../components/ui/card";
import { Field, FieldDescription, FieldLabel } from "../../components/ui/field";
import { Separator } from "../../components/ui/separator";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"
import { Textarea } from "../../components/ui/textarea";
import { Input } from "../../components/ui/input";

const CreateEnterprise = () => {
    return (
        <div>
            <div className="flex justify-between p-5 sticky top-0 z-10 bg-white">
                <div>
                    <InputGroup>
                        <InputGroupInput
                            id="inline-start-input"
                            placeholder="Recherche globale..."
                        />
                        <InputGroupAddon align="inline-start">
                            <Search className="text-muted-foreground" />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
                <div >
                    <div className="flex gap-3">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenu>
                                        <MessageSquare />
                                    </NavigationMenu>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenu>
                                        <Bell />
                                    </NavigationMenu>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenu>
                                        <CircleQuestionMark />
                                    </NavigationMenu>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>


                        <Button>Déconnexion</Button>
                    </div>



                </div>
            </div>
            <div className="flex flex-col gap-7 justify-center mb-8 items-center">
                <div className="flex flex-col gap-3 items-center">
                    <h1 className="text-primary text-2xl text-center font-bold">Work</h1>

                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl font-bold text-center">Créez votre espace de travail</h1>
                        <p className="text-center">
                            Configurez l'identité de votre entreprise pour commencer à collaborer.
                        </p>
                    </div>
                </div>

                <Card className="p-7 shadow-xl border-none">
                    <div className="flex flex-col gap-2 ml-5">
                        <CardTitle className="text-2xl flex items-center gap-3 font-semibold">
                            <Building2 /> Détails de l'organisation
                        </CardTitle>
                        <CardDescription>
                            Ces informations seront visibles par tous vos collaborateurs.
                        </CardDescription>
                    </div>
                    <Separator />
                    <CardContent>
                        <form className="flex flex-col gap-5">
                            <div className="flex justify-between gap-5 items-center">
                                <Field className="max-w-sm">
                                    <FieldLabel htmlFor="inline-start-input">Nom de l'entreprise</FieldLabel>
                                    <InputGroup>
                                        <InputGroupInput
                                            id="inline-start-input"
                                            placeholder="Ex: Acma Industries"
                                        />
                                        <InputGroupAddon align="inline-start">
                                            <Building2 className="text-muted-foreground" />
                                        </InputGroupAddon>
                                    </InputGroup>
                                </Field>

                                <Field className="max-w-sm">
                                    <FieldLabel htmlFor="inline-start-input">Domaine d'expertise</FieldLabel>
                                    <Select>
                                        <SelectTrigger className="">
                                            <SelectValue placeholder="Choisir un domaine" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Domaine</SelectLabel>
                                                <SelectItem value="informatique">Informatique</SelectItem>
                                                <SelectItem value="sante">Santé</SelectItem>
                                                <SelectItem value="marqueting">Marqueting Digital</SelectItem>
                                                <SelectItem value="grapes">Grapes</SelectItem>
                                                <SelectItem value="music">Musique/Cinéma</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </div>

                            <Field className="">
                                <FieldLabel htmlFor="inline-start-input">Description</FieldLabel>
                                <Textarea placeholder="Une descriprion..." />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="picture">Logo de l'entreprise</FieldLabel>
                                <Input id="picture" type="file" />
                                <FieldDescription>Cliquez pour uploader le logo</FieldDescription>
                            </Field>
                            <Separator />
                            <div className="flex justify-between">
                                <Button variant={"outline"} className="p-5">
                                    Annuler{" "}
                                </Button>
                                <Button className="p-5">
                                    Créer l'entreprise <ChevronRight /> {" "}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                <div className="flex gap-2 ">
                    <p className="items-center justify-center text-center text-sm">
                        En créant cette entreprise, vous acceptez nos  <br />
                        <span className="underline">
                            Conditions d'Utilisation et notre Politique de Confidentialité
                        </span>
                    </p>
                </div>
            </div>
            <div className="flex justify-between p-4 text-sm">
                <div>
                    <p>© 2026 Work Enterprise Management. Tous droits réservés.</p>
                </div>
                <div className="flex gap-3">
                    <p>Conditions d'utilisation</p>
                    <p>Confidentialité</p>
                </div>
            </div>
        </div>
    )
}

export default CreateEnterprise
