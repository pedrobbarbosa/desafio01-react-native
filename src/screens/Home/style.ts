import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0D0D0D',
    paddingTop: 80,
    padding: 24,
  },
  logo: {
    width: 130,
    height: 32,
    marginBottom: 40,
    marginTop: 20,
  },
  input: {
    backgroundColor: '#333333',
    flex: 1,
    height: 64,
    marginRight: 5,
    paddingLeft: 8,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
  },
  button: {
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    height: 64,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPlusIcon: {
    width: 16,
    height: 16,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },

  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  createdText: {
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 17,
    color: 'red',
  },
  createdTextSpan: {
  },
  doneText: {
    fontStyle: 'normal',
    fontSize: 17,
    lineHeight: 17,
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListText: {
  },
  emptyListImage: {
    width: 56,
    height: 56,
    marginTop: 48,
    marginBottom: 16,
  },
});