import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    color: '#F2F2F2'
  },
  taskDoneText: {
    textDecorationLine: 'line-through',
  },
  task: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 8,
    backgroundColor: '#262626',
    borderColor: '#333333',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.06)',
  },
  taskTrashIcon: {
    width: 12,
    height: 14,
    margin: 5,
  },
  taskCheckIcon: {
  },
  taskDoneIcon: {
  },

});