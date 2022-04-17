import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      console.log("User dosn`t exists", !userExists);
      throw new Error("User not found");
    }

    if (!userExists.admin) {
      console.log("User is not admin", !userExists.admin);
      throw new Error("You are not an admin");
    }

    const users = this.usersRepository.list();
    console.log("Users", users);
    return users;
  }
}

export { ListAllUsersUseCase };
