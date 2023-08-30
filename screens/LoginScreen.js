import React from "react";
import {
    StyleSheet, Image, Text

} from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import { Formik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).max(16).label('Password')
})

export default function LoginScreen() {

    return (
        <Screen>
            <Image
                style={styles.image}
                source={require('../assets/logo-red.png')} />

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}>

                {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                    <>
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
                            icon='lock'
                            onBlur={() => setFieldTouched('password')}
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
                            onPress={handleSubmit}>Login</AppButton>
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
        margin: 50
    },
    error: {
        color: 'red',
        marginHorizontal: 15,
    }
})