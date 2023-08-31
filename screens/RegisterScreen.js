import React from "react";
import {
    StyleSheet, Image, Text, View

} from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import { Formik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).max(16).label('Password')
})

export default function RegisterScreen() {

    return (

        <Screen>
            <Image
                style={styles.image}
                source={require('../assets/logo-red.png')} />

            <Formik
                initialValues={{ email: '', name: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>
                {({ handleChange, handleSubmit, errors, touched, setFieldTouched }) => (
                    <>
                        <AppTextInput
                            placeholder='name'
                            autoCapitalize='none'
                            onBlur={() => setFieldTouched('name')}
                            icon='account'
                            autoCorrect={false}
                            onChangeText={handleChange('name')} />
                        {errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text>}

                        <AppTextInput
                            placeholder='email'
                            autoCapitalize='none'
                            icon='email'
                            onBlur={() => setFieldTouched('email')}
                            autoCorrect={false}
                            keyboardType='email-address'
                            textContentTypte='emailAddress'
                            onChangeText={handleChange('email')} />
                        {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

                        <AppTextInput
                            placeholder='password'
                            autoCapitalize='none'
                            onBlur={() => setFieldTouched('password')}
                            icon='lock'
                            autoCorrect={false}
                            secureTextEntry={true}
                            textContentTypte='password'
                            onChangeText={handleChange('password')} />
                        {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}

                        <AppButton
                            style={{
                                borderRadius: 20
                            }}
                            color='#fc5c65'
                            onPress={handleSubmit}>Register</AppButton>
                    </>
                )}
            </Formik>
        </Screen>

    )
}

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    },
    error: {
        color: 'red',
        marginHorizontal: 15,
    }
})