import {
    Download,
    Info,
    UploadIcon,
    UserPlus,
} from "lucide-react";

import { Button } from "../../components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";
import { Field, FieldLabel } from "../../components/ui/field";
import { Separator } from "../../components/ui/separator";
import { Input } from "../../components/ui/input";
import { Slider } from "../../components/ui/slider";
// import { useState } from "react";

const CreateEmploye = () => {

    // const [slide, setSlide] = useState<number>(0);

    return (
        <div className="p-10">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl text-primary font-bold">Ajouter un collaborateur</h1>
                    <p className="text-sm text-gray-500">
                        Configurez le profil d'un nouvel employé ou utilisez l'importation groupée
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center gap-2 border rounded-md p-1">
                        <Info size={20} /> <span className="text-sm">Besoins d'aide pour les roles ?</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-10 mt-8">
                <div className="w-3/4">
                    <Card className="p-7 shadow-xl border-none">

                        <div className="flex flex-col gap-2 ml-5">
                            <CardTitle className="text-2xl flex items-center gap-3 font-semibold">
                                <UserPlus className="bg-gray-200 rounded p-1 h-8 w-8" /> Saisie Manuelle
                            </CardTitle>
                        </div>
                        <Separator className="w-full" />
                        <CardContent>
                            <div className="mb-3">
                                <CardTitle>
                                    Identité
                                </CardTitle>
                                <CardDescription>
                                    Informations personnelles et professionnelles de base.
                                </CardDescription>
                            </div>
                            <form className="flex flex-col gap-5">
                                <div className="flex justify-between gap-5 items-center">
                                    <Field className="max-w-sm">
                                        <FieldLabel htmlFor="inline-start-input">Nom Complet</FieldLabel>
                                        <Input placeholder="Ex: John Doe" />
                                    </Field>

                                    <Field className="max-w-sm">
                                        <FieldLabel htmlFor="inline-start-input">Email Professionnel</FieldLabel>
                                        <Input placeholder="Ex: exemple@mail.com" />
                                    </Field>
                                </div>

                                <Separator className="w-full" />
                                <div>
                                    <CardTitle>
                                        Affectation
                                    </CardTitle>
                                    <CardDescription>
                                        Définissez le rôle et l'equipe d'appartenance.
                                    </CardDescription>
                                </div>

                                <div className="flex justify-between gap-5 items-center">
                                    <Field className="max-w-sm">
                                        <FieldLabel htmlFor="inline-start-input">Rôle</FieldLabel>
                                        <Select>
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Choisir un rôle" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Rôle</SelectLabel>
                                                    <SelectItem value="employe">
                                                        Employé
                                                    </SelectItem>
                                                    <SelectItem value="ce">Chef d'équipe</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </Field>

                                    <Field className="max-w-sm">
                                        <FieldLabel htmlFor="inline-start-input">Equipe / Département</FieldLabel>
                                        <Select>
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Choisir une équipe" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel>Equipe/Département</SelectLabel>
                                                    <SelectItem value="securite">
                                                        Sécurité
                                                    </SelectItem>
                                                    <SelectItem value="front">Frontend</SelectItem>
                                                    <SelectItem value="back">Backend</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                </div>

                                <Separator className="w-full" />

                                <div>
                                    <CardTitle>
                                        Paramètre de charge
                                    </CardTitle>
                                    <CardDescription>
                                        Estimation de la capacité hebdomadaire de l'employé.
                                    </CardDescription>
                                </div>

                                {/* le slide prend toute la ligne */}
                                <div className="flex justify-between gap-5 items-center">
                                    <Field className="w-full">
                                        <FieldLabel htmlFor="inline-start-input" className="block w-full">
                                            <div className="flex items-center justify-between w-full">
                                                <span>Charge Estimé (%)</span>
                                                <span className="font-semibold">20%</span>
                                            </div>
                                        </FieldLabel>

                                        <Slider
                                            defaultValue={[20]}
                                            className="w-full"
                                            max={20}
                                            step={1}
                                        />
                                    </Field>
                                </div>

                                <div>
                                    <div className="flex items-center justify-center gap-2 border rounded-md p-1">
                                        <Info size={20} /> <span className="text-sm">Une charge supérieure à 80% peut limiter la flexibilité sous les nouveaux projets.</span>
                                    </div>
                                </div>
                                <Separator />

                                <div className="flex justify-end gap-3">
                                    <Button variant="outline" className="flex justify-end p-5">
                                        Annuler
                                    </Button>
                                    <Button className="flex justify-end p-5">
                                        Ajouter l'employé
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
                <div className="w-1/4 flex flex-col gap-10">
                    <Card className="p-6 shadow-xl">
                        <CardTitle>
                            <h1 className="text-xl font-bold">Importation Groupé</h1>
                            <p className="text-sm text-gray-500">
                                Gagnez du temps en important toute votre équipe via un fichier
                            </p>
                        </CardTitle>
                        <CardContent className="flex flex-col gap-2">
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition cursor-pointer">
                                <input
                                    type="file"
                                    multiple
                                    accept=".pdf,.png,.jpg,.jpeg"
                                    className="hidden"
                                    id="file-upload"
                                />
                                <label htmlFor="file-upload" className="cursor-pointer">
                                    <UploadIcon size={5} className="w-8 h-8 text-gray-400 bg-gray-200 rounded-full p-2 mx-auto mb-2" />
                                    <p className="text-sm text-gray-600 mb-1">
                                        Importez plusieurs employés simultanément.
                                    </p>
                                    <p className="text-xs text-gray-500">PDF, PNG, JPG (Max. 10MB)</p>
                                </label>
                            </div>
                            <Button variant="outline" className="p-5 text-md"> <Download size={5} />Télécharger le modèl </Button>
                            <Button className="p-5 text-md">Parcourir les fichiers</Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary shadow-2xl">
                        <CardHeader>
                            <h1 className="text-white text-xl font-bold">Conseil d'intégration</h1>
                        </CardHeader>
                        <CardContent>

                            <p className="text-white text-md">
                                Chaque nouvel employé recevra automatiquement une invitation par email pour configurer son mot de passe et son profil.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CreateEmploye;
