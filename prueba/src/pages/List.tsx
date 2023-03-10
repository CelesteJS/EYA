import { useState } from "react";
import {
    Avatar,
    Title,
    Table,
    Group,
    Text,
    ActionIcon,
    Menu,
    ScrollArea,
    Card,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

export interface Element {
    avatar: string;
    name: string;
    email: string;
    phone: string;
    cpo: number;
    cpd: number;
    paquete: string;
    largo: string;
    ancho: string;
    alto: string;
    peso: string;
}

export const initialElements: Element[] = [
    {
        avatar: "",
        name: "CelesteJS",
        email: "user@mail.com",
        phone: "Tel:+52 55-55-55-55",
        cpo: 0,
        cpd: 0,
        paquete: "caja",
        largo: "",
        ancho: "",
        alto: "",
        peso: "",
    },
];

export function Userslist() {
    const [elements, setElements] = useState(initialElements);

    const deleteElement = (index: number) => {
        if (window.confirm("¿Estás seguro de que quieres borrar esta fila?")) {
            const newElements = [...elements];
            newElements.splice(index, 1);
            setElements(newElements);
        }
    };

    const rows = elements.map((element, index) => (
        <tr key={element.name}>
            <td>
                <Group spacing="sm">
                    <Avatar size={40} src={element.avatar} radius={40} />
                    <div>
                        <Text fz="sm" fw={500}>
                            {element.name}
                        </Text>
                        <Text c="dimmed" fz="xs">
                            {element.email}
                        </Text>
                        <Text c="dimmed" fz="xs">
                            {element.phone}
                        </Text>
                    </div>
                </Group>
            </td>
            <td>
                <Text fz="xs">{element.cpo}</Text>
            </td>
            <td>
                <Text fz="sm">{element.cpd}</Text>
            </td>
            <td>
                <Text fz="sm" fw={500}>Contenido del Paquete</Text>
                <div>
                    <Text fz="sm">
                        largo:
                        {element.largo} cm
                    </Text>
                    <Text fz="xs">
                        ancho:
                        {element.ancho} cm
                    </Text>
                    <Text fz="xs">
                        alto:
                        {element.alto} cm
                    </Text>
                    <Text fz="xs">
                        peso:
                        {element.peso} kg
                    </Text>
                </div>
            </td>
            <td>
                <Group spacing={0} position="right">
                    <ActionIcon onClick={() => deleteElement(index)}>
                        <IconTrash size="1rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </td>
        </tr>
    ));

    return (
        <div>
            <Card shadow="xl" padding="lg" radius="md" withBorder>
                <Title>Solicitudes</Title>
                <ScrollArea>
                    <Table sx={{ minWidth: 800 }} verticalSpacing="md">
                        <thead>
                            <tr>
                                <th>Usuario</th>
                                <th>CP Origen</th>
                                <th>CP Destino</th>
                                <th>Paquete</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>
                </ScrollArea>
            </Card>
        </div>
    );
}

