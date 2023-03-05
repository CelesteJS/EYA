import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Title, Grid, Card } from '@mantine/core';

export function UsersForm() {
    const form = useForm({
        initialValues: { name: '', email: '', phone: '', text: '', cpo: '', cpd: '', length: '', width: '', height: '', weight: '' },
        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            phone: (value) => (value.length < 10 ? 'You must be at least 10 numbers' : null),
            text: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            cpo: (value) => (value.length < 5 ? 'Name must have at least 5 numbers' : null),
            cpd: (value) => (value.length < 5 ? 'Name must have at least 5 numbers' : null),
            length: (value) => (value.length < 5 ? 'Name must have at least 2 numbers' : null),
            width: (value) => (value.length < 5 ? 'Name must have at least 2 numbers' : null),
            height: (value) => (value.length < 5 ? 'Name must have at least 2 numbers' : null),
            weight: (value) => (value.length < 5 ? 'Name must have at least 2 numbers' : null),
        },
    });

    return (
        <div>
            <Card shadow="xl" padding="lg" radius="md" withBorder>
                <Box maw={320} mx="auto">
                    <div>
                        <Title size="h3">
                            Solicitud de envio del paquete
                        </Title>
                    </div>
                    <br />
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        {/* <form onSubmit={form.onSubmit(console.log)}> */}

                        <TextInput
                            withAsterisk
                            label="Nombre Completo:"
                            placeholder="Name"
                            {...form.getInputProps('name')} />

                        <TextInput
                            withAsterisk
                            mt="sm"
                            label="Email"
                            placeholder="Email"
                            {...form.getInputProps('email')} />

                        <TextInput
                            withAsterisk
                            label="Teléfono"
                            placeholder="00-00-000-000"
                            {...form.getInputProps('phone')}
                        />
                        <Grid grow gutter="xs">
                            <Grid.Col span={4}>
                                <TextInput
                                    withAsterisk
                                    label="CP Origen"
                                    placeholder="CP"
                                    {...form.getInputProps('cpo')} />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <TextInput
                                    withAsterisk
                                    label="CP Destino"
                                    placeholder="CP"
                                    {...form.getInputProps('cpd')} />
                            </Grid.Col>
                        </Grid>
                        <br />
                        <Title size="h6">
                            Datos del Paquete
                        </Title>
                        <br />
                        <Grid grow gutter="xs">
                            <Grid.Col span={4}>
                                <TextInput
                                    withAsterisk
                                    label="Largo (Cm)"
                                    placeholder="Length"
                                    {...form.getInputProps('length')} />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <TextInput
                                    withAsterisk
                                    label="Ancho (Cm)"
                                    placeholder="Width"
                                    {...form.getInputProps('width')} />
                            </Grid.Col>
                        </Grid>

                        <Grid grow gutter="xs">
                            <Grid.Col span={4}>
                                <TextInput
                                    withAsterisk
                                    label="Alto (Cm)"
                                    placeholder="Height"
                                    {...form.getInputProps('height')} />
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <TextInput
                                    withAsterisk
                                    label="Peso (Kg)"
                                    placeholder="Weight"
                                    {...form.getInputProps('weight')} />
                            </Grid.Col>
                        </Grid>
                        <TextInput
                            withAsterisk
                            label="Contenido del paquete"
                            placeholder="Description"
                            {...form.getInputProps('text')}
                        />

                        <Button color="orange" type="submit" mt="sm">
                            Submit
                        </Button>

                    </form>
                </Box>
            </Card>

        </div>

    );
}