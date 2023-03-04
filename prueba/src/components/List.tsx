import { Avatar, Title, Table, Group, Text, ActionIcon, Menu, ScrollArea } from '@mantine/core';
import {
    IconPencil,
    IconMessages,
    IconNote,
    IconReportAnalytics,
    IconTrash,
    IconDots,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export const elements = [{
    avatar: "", name: "CeleteJS", email: "user@mail.com", phone: "Tel:+5255555555", cpo: 0, cpd: 0, paquete: "caja", largo: "", ancho: "", alto: "", peso: "",
}
]
export function UsersList() {

    const rows = elements.map((element) => (
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
                <Text fz="xs">
                    {element.cpo}
                </Text>
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
                    <ActionIcon>
                        <IconTrash size="1rem" stroke={1.5} />
                    </ActionIcon>
                </Group>
            </td>
        </tr>
    ));

    return (
        <div>
            <Title>SOLICITUDES</Title>
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
        </div>
    );
}