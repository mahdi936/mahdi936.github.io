'use client'
import { Alert, Button, Card, CardActions, CardContent, CardHeader, Container, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import FormProvider, {
    RHFTextField,
    RHFRadioGroup
} from 'src/components/hook-form';
import { useEffect, useState } from 'react';
import { fNumber } from 'src/utils/format-number';
// ----------------------------------------------------------------------
type props = {
    price: number;
}
export default function HomeSection(props: props) {

    const [value, setValue] = useState(0);
    const defaultValues = {
        priceType: 'auto',
        weight: 0,
        price: props.price,
        wagePercentage: 0,
        profitPercentage: 0,
        taxPercentage: 0
    };

    const CalculatorSchema = Yup.object().shape({
        priceType: Yup.string(),
        price: Yup.number().required('قیمت اجباری است!').min(1, 'قیمت اجباری است!'),
        weight: Yup.number().required('وزن اجباری است!').min(1, 'وزن اجباری است!'),
        wagePercentage: Yup.number().required('اجرت اجباری است!').min(1, 'اجرت اجباری است!'),
        profitPercentage: Yup.number().required('اجرت اجباری است!').min(1, 'سود اجباری است!'),
        taxPercentage: Yup.number().required('اجرت اجباری است!').min(1, 'مالیات اجباری است!'),
    });

    const methods = useForm({
        resolver: yupResolver(CalculatorSchema),
        defaultValues,
    });




    const {
        handleSubmit,
        watch,
        setValue: setFormValue,
        formState: { isSubmitSuccessful },
    } = methods;

    var data = watch();

    const onSubmit = handleSubmit(async (data) => {
        const F = (data.price * data.weight) + (data.price * data.weight * data.wagePercentage / 100);
        const G = F + (F * data.profitPercentage / 100);
        const A = G + (G * data.taxPercentage / 100);
        const B = (data.price * data.weight) * (data.taxPercentage / 100);
        const finalPrice = A - B;
        setValue(finalPrice);
    });

    useEffect(() => {
        setFormValue('price', props.price);
    }, [data.priceType]);
    return <Container maxWidth="sm">
        <Card>
            <CardHeader title='محاسبه گر دُر شمار'>
            </CardHeader>
            <CardContent>
                <FormProvider methods={methods} onSubmit={onSubmit}>

                    <Stack gap={2}>
                        <RHFRadioGroup
                            row
                            name="priceType"
                            label="نوع قیمت"
                            spacing={4}
                            options={[
                                { value: 'auto', label: 'قیمت آنلاین' },
                                { value: 'custom', label: 'قیمت دستی' },
                            ]}
                        />
                        <RHFTextField disabled={data.priceType == 'auto'} name='price' type='number' label="قیمت طلا (تومان)" />
                        <RHFTextField name='weight' type='number' label="وزن طلا (گرم)" />
                        <RHFTextField name='wagePercentage' type='number' label="درصد اجرت" />
                        <RHFTextField name='profitPercentage' type='number' label="درصد سود" />
                        <RHFTextField name='taxPercentage' type='number' label="درصد مالیات" />
                        <Button type='submit' size='large' variant='contained' >
                            محاسبه
                        </Button>
                        {isSubmitSuccessful &&
                            <Alert
                                severity={'success'}
                                variant="standard"
                                onClose={() => { }}
                                sx={{ width: 1 }}
                            >
                                هزینه نهایی این طلا {fNumber(value)} می باشد.
                            </Alert>
                        }

                    </Stack>

                </FormProvider>
            </CardContent>


        </Card>
    </Container>
}
