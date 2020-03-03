import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Formik, FormikValues, FormikProps } from 'formik';
import { TextField } from 'react-native-material-textfield';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { FORM_FIELDS, SCHEMAS } from '../../../services/auth/constants';
import { getInitialFields } from './utils';

interface IFormProps {
  screen: 'SIGN_IN' | 'SIGN_UP' | 'RESET_PASSWORD';
  onSubmit: (a: FormikValues, b?: any) => void;
}

export const AuthForm = ({ onSubmit, screen }: IFormProps) => {
  const fieldList = FORM_FIELDS[screen];
  const formFields = getInitialFields(fieldList);
  const validationSchema = SCHEMAS[screen];

  const renderForm = (props: FormikProps<any>) => {
    const { values, errors, handleChange, handleSubmit, isSubmitting } = props;

    return (
      <View>
        {fieldList.map((field: string, key: number) => {
          const error = errors[field] || '';
          return (
            <TextField
              key={key}
              value={values[field]}
              error={error as string}
              label={field}
              onChangeText={handleChange(field)}
            />
          );
        })}
        <TouchableOpacity
          onPress={handleSubmit}
          style={formStyles.submitButton}
        >
          {isSubmitting ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={formStyles.text}>LOG IN</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={logoStyles.container}>
        <Text style={logoStyles.mockText}>THIS IS A LOGO</Text>
      </View>

      <Formik
        initialValues={formFields}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
      >
        {renderForm}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(222, 219, 213)',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 20,
  },
});

const logoStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mockText: {
    fontSize: 24,
    color: 'white',
  },
});

const formStyles = StyleSheet.create({
  submitButton: {
    padding: 20,
    backgroundColor: 'rgb(219, 90, 81)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});
