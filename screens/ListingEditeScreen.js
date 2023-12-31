import React from "react";
import {
    StyleSheet, Text, View
} from "react-native"
import Screen from '../components/Screen'
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from 'yup';
import ImageFormPicker from "../components/ImageFormPicker";

const categories = [
    {
        label: 'Furniture',
        value: 1
    },
    {
        label: 'Clothing',
        value: 2
    },
    {
        label: 'Camera',
        value: 3
    }
]

const validationSchema = Yup.object().shape({
    title: Yup.string().required().label('Title'),
    price: Yup.number().required().label('Price'),
    category: Yup.object().required().label('Category'),
    description: Yup.string().required().min(4).label('Description'),
    images: Yup.array().min(1, 'Choose at least one image.').label('Images')
})

export default function ListingEditeScreen() {

    return (
        <Screen>
            <Formik
                initialValues={{
                    title: '',
                    price: '',
                    category: '',
                    description: '',
                    images: []

                }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, setFieldValue, values, setFieldTouched, touched }) => (
                    <>
                        <ImageFormPicker
                            onSelectImage={(uri) => {
                                setFieldValue('images', [uri, ...values['images']])
                            }}
                            imageUris={values['images']}
                            onRemoveImage={(uri) => {
                                const newUris = values['images'].filter((imageUri) => imageUri !== uri);
                                setFieldValue('images', newUris);
                            }}
                            onBlur={() => setFieldTouched('images')} />

                        {errors.images && touched.images && <Text style={styles.error}>{errors.images}</Text>}

                        <AppTextInput
                            placeholder='Title'
                            onBlur={() => setFieldTouched('title')}
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholderTextColor='grey'
                            onChangeText={handleChange('title')}
                        />
                        {errors.title && touched.title && <Text style={styles.error}>{errors.title}</Text>}

                        <AppTextInput
                            placeholder='Price'
                            autoCapitalize='none'
                            autoCorrect={false}
                            onBlur={() => setFieldTouched('price')}
                            placeholderTextColor='grey'
                            onChangeText={handleChange('price')}
                        />
                        {errors.price && touched.price && <Text style={styles.error}>{errors.price}</Text>}

                        <AppPicker
                            selectedItem={values['category']}
                            onSelectItem={(item) => setFieldValue('category', item)}
                            items={categories}
                            placeholder='Category'
                            onBlur={() => setFieldTouched('category')}
                        />
                        {errors.category && touched.category && <Text style={styles.error}>{errors.category}</Text>}

                        <AppTextInput
                            placeholder='Description'
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholderTextColor='grey'
                            onChangeText={handleChange('description')}
                            onBlur={() => setFieldTouched('description')}
                        />
                        {errors.description && touched.description && <Text style={styles.error}>{errors.description}</Text>}

                        <AppButton
                            style={{
                                borderRadius: 20
                            }}
                            color='#fc5c65'
                            onPress={handleSubmit}>Post</AppButton>
                    </>
                )}
            </Formik>

        </Screen>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginHorizontal: 15,

    }

})