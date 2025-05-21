import EducationModule from './education.model';
import { TEducation } from './education.interface';
import QueryBuilder from '../../builder/QueryBuilder';

const createEducation = async (payload: TEducation) => {
  const education = await EducationModule.create(payload);
  return education;
};

const getAllEducationsDB = async (query: Record<string, unknown>) => {
  const eduQuery = new QueryBuilder(EducationModule.find(), query)
    .search(['degree', 'institution', 'description'])
    .filter()
    .sort()
    .paginate();

  const result = await eduQuery.modelQuery;
  const meta = await eduQuery.countTotal();
  return { result, meta };
};

export const EducationServices = {
  createEducation,
  getAllEducationsDB,
};
