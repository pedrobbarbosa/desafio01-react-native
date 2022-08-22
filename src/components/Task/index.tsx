import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './style';

type taskType = {
  id: string,
  title: string,
  done: boolean,
  onDone?: () => void
  onRemove?: () => void
}

export function Task({ id, title, done = false, onDone, onRemove }: taskType) {
  return (
    <>
      <View style={styles.task}>
        <View>
          <TouchableOpacity onPress={onDone}>
            {done ?
              <Image source={require('../../assets/done.png')} style={styles.taskDoneIcon} />
              :
              <Image source={require('../../assets/check.png')} style={styles.taskCheckIcon} />
            }
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          {done ? <Text style={[styles.taskText, styles.taskDoneText]}>{title}</Text> : <Text style={[styles.taskText]}>{title}</Text>}
        </View>
        <View>
          <TouchableOpacity onPress={onRemove}>
            <Image source={require('../../assets/lixeira.png')} style={styles.taskTrashIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}