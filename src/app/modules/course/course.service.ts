import CourseModule from './course.model';
import { TCourse } from './course.interface';
import QueryBuilder from '../../builder/QueryBuilder';

const createCourse = async (payload: TCourse) => {
  const course = await CourseModule.create(payload);
  return course;
};

const getAllCoursesDB = async (query: Record<string, unknown>) => {
  const courseQuery = new QueryBuilder(CourseModule.find(), query)
    .search(['name', 'provider', 'description'])
    .filter()
    .sort()
    .paginate();

  const result = await courseQuery.modelQuery;
  const meta = await courseQuery.countTotal();
  return { result, meta };
};

export const CourseServices = {
  createCourse,
  getAllCoursesDB,
};
